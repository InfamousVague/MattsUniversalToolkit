import { get, writable, type Writable } from "svelte/store"
import * as wasm from "warp-wasm"
import { WarpStore } from "./WarpStore"
import { Store } from "../state/store"
import { UIStore } from "../state/ui"
import { ConversationStore } from "../state/conversation"
import { MessageOptions } from "warp-wasm"
import { ChatType } from "$lib/enums"
import { type User, type Chat, defaultChat } from "$lib/types"
import { WarpError, handleErrors } from "./HandleWarpErrors"
import { failure, success, type Result } from "$lib/utils/Result"
import { create_cancellable_handler, type Cancellable } from "$lib/utils/CancellablePromise"

class RaygunStore {
    private raygunWritable: Writable<wasm.RayGunBox | null>
    // A map of message listeners
    private messageListeners: Writable<{ [key: string]: Cancellable }>

    constructor(multipass: Writable<wasm.RayGunBox | null>) {
        this.raygunWritable = multipass
        this.messageListeners = writable({})
        this.raygunWritable.subscribe(r => {
            if (r) {
                this.handleRaygunEvent(r)
                let listeners = get(this.messageListeners)
                if (Object.keys(listeners).length > 0) {
                    // Cancels current message event listeners
                    for (let handler of Object.values(listeners)) {
                        handler.cancel()
                    }
                }
                this.init_conversation_handlers(r)
            }
        })
    }

    async create_conversation(recipient: User) {
        let conversation = await this.get(r => r.create_conversation(recipient.key), "Error creating new conversation")
        return conversation.map(conv => {
            let chat: Chat = {
                ...defaultChat,
                id: conv.id(),
                name: conv.name() ? conv.name()! : conv.recipients()[0],
                kind: ChatType.DirectMessage,
                creator: get(Store.state.user),
                users: [get(Store.state.user), recipient],
                last_message_at: new Date(),
            }
            UIStore.addSidebarChat(chat)
            return chat
        })
    }

    async create_group_conversation(name: string | undefined, recipients: User[]) {
        let conversation = await this.get(
            r =>
                r.create_group_conversation(
                    name,
                    recipients.map(r => r.key),
                    new wasm.GroupSettings()
                ),
            "Error creating new group conversation"
        )
        return conversation.map(conv => {
            let chat: Chat = {
                ...defaultChat,
                id: conv.id(),
                name: conv.name() ? conv.name()! : conv.recipients().slice(0, 3).join(", "),
                kind: ChatType.Group,
                creator: get(Store.state.user),
                users: [get(Store.state.user), ...recipients],
                last_message_at: new Date(),
            }
            UIStore.addSidebarChat(chat)
            return chat
        })
    }

    // TODO wireup
    async get_conversation(conversation_id: string) {
        return this.get(r => r.get_conversation(conversation_id), `Error fetching conversation with id ${conversation_id}`)
    }

    // TODO wireup
    async list_conversations(): Promise<Result<WarpError, wasm.Conversation[]>> {
        return this.get(r => r.list_conversations(), `Error fetching conversations`)
    }

    // TODO wireup
    async get_message(conversation_id: string, message_id: string) {
        return this.get(r => r.get_message(conversation_id, message_id), `Error fetching message for conversation ${conversation_id}`)
    }

    // TODO wireup
    async get_message_count(conversation_id: string) {
        return this.get(r => r.get_message_count(conversation_id), `Error fetching message count for conversation ${conversation_id}`)
    }

    // TODO wireup
    async message_status(conversation_id: string, message_id: string) {
        return this.get(r => r.message_status(conversation_id, message_id), `Error fetching message status for conversation ${conversation_id}`)
    }

    // TODO wireup
    async get_messages(conversation_id: string, options: MessageOptions) {
        return this.get(r => r.get_messages(conversation_id, options), `Error fetching messages for conversation ${conversation_id}`)
    }

    async send(conversation_id: string, message: string[]) {
        let newMessage = {
            id: "",
            details: {
                at: new Date(),
                origin: get(Store.state.user),
                remote: false,
            },
            text: message,
            inReplyTo: null,
            reactions: {},
            attachments: [],
            pinned: false,
        }
        let result = await this.get(r => r.send(conversation_id, message), "Error sending message")
        result.onSuccess(_ => {
            ConversationStore.addMessage(get(Store.state.activeChat), newMessage)
        })
        return result
    }

    async sendMultiple(conversation_ids: string[], message: string[]) {
        let newMessage = {
            id: "",
            details: {
                at: new Date(),
                origin: get(Store.state.user),
                remote: false,
            },
            text: message,
            inReplyTo: null,
            reactions: {},
            attachments: [],
            pinned: false,
        }
        let result = await this.get(async r => {
            let sent: [string, string][] = []
            for (let conversation_id of conversation_ids) {
                sent.push([conversation_id, await r.send(conversation_id, message)])
            }
            return sent
        }, "Error sending message")
        result.onSuccess(r => {
            let chats = get(UIStore.state.chats)
            for (let conversation_id of r) {
                let chat = chats.find(c => c.id === conversation_id[0])
                if (chat) {
                    ConversationStore.addMessage(chat, newMessage)
                }
            }
        })
        return result
    }

    async edit(conversation_id: string, message_id: string, message: string[]) {
        let result = await this.get(r => r.edit(conversation_id, message_id, message), "Error editing message")
        return result.map(_ => {
            ConversationStore.editMessage(get(Store.state.activeChat), message_id, message.join("\n"))
        })
    }

    /**
     * Deletes a message for the given chat. If no message id provided will delete the chat
     */
    async delete(conversation_id: string, message_id?: string) {
        let result = await this.get(r => r.delete(conversation_id, message_id), "Error deleting message")
        return result.map(_ => {
            if (message_id) ConversationStore.removeMessage(conversation_id, message_id)
            else {
                let conversations = get(ConversationStore.conversations)
                ConversationStore.conversations.set(conversations.filter(c => c.id !== conversation_id))
            }
        })
    }

    /**
     * Deletes direct messages with the given recipient
     */
    async deleteAllConversationsFor(recipient: string) {
        let convs_res = await this.list_conversations()
        convs_res.onSuccess(async convs => {
            convs
                .filter(c => c.settings() === "Direct" && recipient in c.recipients()) // TODO verify settings check corresponding truly to direct message
                .forEach(async conv => {
                    let result = await this.get(r => r.delete(conv.id(), undefined), "Error deleting message")
                    result.onSuccess(_ => {
                        let conversations = get(ConversationStore.conversations)
                        ConversationStore.conversations.set(conversations.filter(c => c.id !== conv.id()))
                    })
                })
        })
    }

    async react(conversation_id: string, message_id: string, state: wasm.ReactionState, emoji: string) {
        let result = await this.get(r => r.react(conversation_id, message_id, state, emoji), "Error reacting to message")
        return result.map(_ => {
            ConversationStore.editReaction(get(Store.state.activeChat), message_id, emoji, state == wasm.ReactionState.Add)
        })
    }

    async pin(conversation_id: string, message_id: string, pin: boolean) {
        let result = await this.get(r => r.pin(conversation_id, message_id, pin ? wasm.PinState.Pin : wasm.PinState.Unpin), "Error pinning message")
        return result.map(_ => {
            ConversationStore.pinMessage(get(Store.state.activeChat), message_id, pin)
        })
    }

    async reply(conversation_id: string, message_id: string, message: string[]) {
        let result = await this.get(r => r.reply(conversation_id, message_id, message), "Error replying to message")
        return result.map(async _ => {
            let r = await this.get_message(conversation_id, message_id)
            r.onSuccess(msg => {
                let reply = this.convert_message(conversation_id, msg)
                let newMessage = {
                    id: "",
                    details: {
                        at: new Date(),
                        origin: get(Store.state.user),
                        remote: false,
                    },
                    text: message,
                    inReplyTo: reply,
                    reactions: {},
                    attachments: [],
                    pinned: false,
                }
                ConversationStore.addMessage(get(Store.state.activeChat), newMessage)
            })
        })
    }

    async update_conversation_settings(conversation_id: string, direct: boolean) {
        let result = await this.get(r => r.update_conversation_settings(conversation_id, direct ? 1 : 0), "Error deleting message")
        return result.map(_ => {
            let chats = get(UIStore.state.chats)
            let chat = chats.find(c => conversation_id === c.id)
            if (chat) {
                chat.kind = direct ? ChatType.DirectMessage : ChatType.Group
            }
            UIStore.state.chats.update(() => chats)
        })
    }

    async send_event(conversation_id: string, event: wasm.MessageEvent) {
        let result = await this.get(r => r.send_event(conversation_id, event), `Error sending event ${event}`)
        return result
    }

    private async handleRaygunEvent(raygun: wasm.RayGunBox) {
        let events = await raygun.raygun_subscribe()
        let evt: Promise<any>
        while ((evt = await events.next())) {
            console.log("raygun event ", evt)
            //TODO handle conversation create and deletion. Add/Remove conversation stream for the chats
        }
    }

    private async init_conversation_handlers(raygun: wasm.RayGunBox) {
        let conversations: wasm.Conversation[] = await raygun.list_conversations()
        let handlers: { [key: string]: Cancellable } = {}
        for (let conversation of conversations) {
            let handler = await this.create_conversation_event_handler(conversation.id())
            if (handler) {
                handlers[conversation.id()] = handler
            }
        }
        this.messageListeners.set(handlers)
    }

    private async create_conversation_event_handler(conversation_id: string) {
        let stream = await this.get(r => r.get_conversation_stream(conversation_id), `Error getting conversation stream for ${conversation_id}`)
        let handler: Cancellable | undefined
        stream.fold(
            e => {
                console.log(`Couldn't create message event listener: ${e}`)
            },
            async stream => {
                handler = create_cancellable_handler(async () => {
                    let evt: Promise<any>
                    while ((evt = await stream.next())) {
                        console.log("message event ", evt)
                    }
                })
            }
        )
        return handler
    }

    /**
     * Convenient helper method to get data from raygun
     */
    private async get<T>(handler: (raygun: wasm.RayGunBox) => Promise<T> | T, err: string): Promise<Result<WarpError, T>> {
        let raygun = get(this.raygunWritable)
        if (raygun) {
            try {
                return success(await handler(raygun))
            } catch (error) {
                console.log(`${err}: ${error}`)
                return failure(handleErrors(`${err}: ${error}`))
            }
        }
        return failure(WarpError.RAYGUN_NOT_FOUND)
    }

    /**
     * Convenient helper method to subscribe to changes from raygun while getting a value
     */
    // private async subscribe<T>(handler: (raygun: wasm.RayGunBox) => T, err: string): Promise<Result<WarpError, T>> {
    //     let res: Result<WarpError, T> = failure(WarpError.RAYGUN_NOT_FOUND)
    //     this.raygunWritable.subscribe(async raygun => {
    //         if (raygun) {
    //             try {
    //                 res = success(await handler(raygun))
    //             } catch (error) {
    //                 console.log(`${err}: ${error}`)
    //                 res = failure(handleErrors(`${err}: ${error}`))
    //             }
    //         }
    //         res = failure(WarpError.RAYGUN_NOT_FOUND)
    //     })
    //     return res
    // }

    /**
     * Converts warp message to ui message
     */
    private convert_message(conversation_id: string, message: wasm.Message | undefined) {
        if (!message) return null
        return {
            id: message.id(),
            details: {
                at: message.date(),
                origin: get(Store.state.user),
                remote: false,
            },
            text: message.lines(),
            inReplyTo: message.replied() ? ConversationStore.getMessage(conversation_id, message.replied()!) : null,
            reactions: message.reactions(),
            attachments: message.attachments(),
            pinned: message.pinned(),
        }
    }
}

export const RaygunStoreInstance = new RaygunStore(WarpStore.warp.raygun)
