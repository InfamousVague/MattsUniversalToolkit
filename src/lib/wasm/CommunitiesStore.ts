import { get, type Writable } from "svelte/store"
import * as wasm from "warp-wasm"
import { WarpStore } from "./WarpStore"
import { failure, success, type Result } from "$lib/utils/Result"
import { handleErrors, WarpError } from "./HandleWarpErrors"
import { MessageOptions } from "warp-wasm"
import { convertWarpAttachment, createFileAttachHandler, createFileDownloadHandler, createFileDownloadHandlerRaw, type FetchMessageResponse, type FetchMessagesConfig, type FileAttachment, type SendMessageResult } from "./RaygunStore"
import { messageTypeFromTexts, type Message, type Reaction } from "$lib/types"
import { MultipassStoreInstance } from "./MultipassStore"
import { Store } from "$lib/state/Store"
import { Appearance } from "$lib/enums"

class CommunitiesStore {
    private raygunWritable: Writable<wasm.RayGunBox | null>

    constructor(raygun: Writable<wasm.RayGunBox | null>) {
        this.raygunWritable = raygun
    }

    async createCommunity(name: string) {
        return this.get(r => r.create_community(name), `Error creating a community with name ${name}`)
    }
    async deleteCommunity(community_id: string) {
        return this.get(r => r.delete_community(community_id), `Error deleting community ${community_id}`)
    }
    async getCommunity(community_id: string) {
        return this.get(r => r.get_community(community_id), `Error getting community ${community_id}`)
    }
    async listCommunitiesJoined() {
        return this.get(r => r.list_communities_joined(), `Error listing joined communities`)
    }
    async listCommunitiesInvitedTo() {
        return this.get(r => r.list_communities_invited_to(), `Error listing community invitations`)
    }
    async leaveCommunity(community_id: string) {
        return this.get(r => r.leave_community(community_id), `Error leaving community ${community_id}`)
    }

    async getCommunityIcon(community_id: string) {
        return this.get(r => r.get_community_icon(community_id), `Error getting icon for community ${community_id}`)
    }
    async getCommunityBanner(community_id: string) {
        return this.get(r => r.get_community_banner(community_id), `Error getting banner for community ${community_id}`)
    }
    async editCommunityPicture(community_id: string, picture: string, banner?: boolean) {
        return this.get(r => {
            const data = picture.startsWith("data:") ? picture.split(",")[1] : picture
            const buffer = Buffer.from(data, "base64")
            const len = buffer.length
            const stream = new ReadableStream({
                start(controller) {
                    controller.enqueue(buffer)
                    controller.close()
                },
            })
            let file = new wasm.AttachmentFile("", new wasm.AttachmentStream(len, stream))
            return banner ? r.edit_community_banner(community_id, file) : r.edit_community_icon(community_id, file)
        }, `Error editing picture for community ${community_id}`)
    }

    async createCommunityInvite(community_id: string, target_user?: string, expiry?: Date) {
        return this.get(r => r.create_community_invite(community_id, target_user, expiry), `Error creating invite for community ${community_id}`)
    }
    async deleteCommunityInvite(community_id: string, invite_id: string) {
        return this.get(r => r.delete_community_invite(community_id, invite_id), `Error deleting invite ${invite_id} for community ${community_id}`)
    }
    async getCommunityInvite(community_id: string, invite_id: string) {
        return this.get(r => r.get_community_invite(community_id, invite_id), `Error getting invite ${invite_id} for community ${community_id}`)
    }
    async acceptCommunityInvite(community_id: string, invite_id: string) {
        return this.get(r => r.accept_community_invite(community_id, invite_id), `Error accepting invite ${invite_id} for community ${community_id}`)
    }
    async editCommunityInvite(community_id: string, invite_id: string, updater: (inv: wasm.CommunityInvite) => void) {
        return this.get(async r => {
            let invite = await r.get_community_invite(community_id, invite_id)
            updater(invite)
            return r.edit_community_invite(community_id, invite_id, invite)
        }, `Error editing invite ${invite_id} for community ${community_id}`)
    }

    async createCommunityRole(community_id: string, name: string) {
        return this.get(r => r.create_community_role(community_id, name), `Error creating role for community ${community_id}`)
    }
    async deleteCommunityRole(community_id: string, role_id: string) {
        return this.get(r => r.delete_community_role(community_id, role_id), `Error deleting role for community ${community_id}`)
    }
    async getCommunityRole(community_id: string, role_id: string) {
        return this.get(r => r.get_community_role(community_id, role_id), `Error getting role for community ${community_id}`)
    }
    async editCommunityRoleName(community_id: string, role_id: string, new_name: string) {
        return this.get(r => r.edit_community_role_name(community_id, role_id, new_name), `Error editing role ${role_id} for community ${community_id}`)
    }
    async grantCommunityRole(community_id: string, role_id: string, user: string) {
        return this.get(r => r.grant_community_role(community_id, role_id, user), `Error granting role ${role_id} in community ${community_id} for user ${user}`)
    }
    async revokeCommunityRole(community_id: string, role_id: string, user: string) {
        return this.get(r => r.revoke_community_role(community_id, role_id, user), `Error revoking role ${role_id} in community ${community_id} from user ${user}`)
    }

    async createCommunityChannel(community_id: string, channel_name: string, channel_type: wasm.CommunityChannelType) {
        return this.get(r => r.create_community_channel(community_id, channel_name, channel_type), `Error creating channel for community ${community_id}`)
    }
    async deleteCommunityChannel(community_id: string, channel_id: string) {
        return this.get(r => r.delete_community_channel(community_id, channel_id), `Error deleting channel ${channel_id} for community ${community_id}`)
    }
    async getCommunityChannel(community_id: string, channel_id: string) {
        return this.get(r => r.get_community_channel(community_id, channel_id), `Error getting channel for community ${community_id}`)
    }

    async editCommunityName(community_id: string, name: string) {
        return this.get(r => r.edit_community_name(community_id, name), `Error editing name for community ${community_id}`)
    }
    async editCommunityDescription(community_id: string, description?: string) {
        return this.get(r => r.edit_community_description(community_id, description), `Error editing description for community ${community_id}`)
    }

    async grantCommunityPermission(community_id: string, permission: CommunityPermission, role_id: string) {
        return this.get(r => r.grant_community_permission(community_id, permission, role_id), `Error granting permission to role ${role_id} for community ${community_id}`)
    }
    async revokeCommunityPermission(community_id: string, permission: CommunityPermission, role_id: string) {
        return this.get(r => r.revoke_community_permission(community_id, permission, role_id), `Error revoking permission for role ${role_id} in community ${community_id}`)
    }
    async grantCommunityPermissionForAll(community_id: string, permission: CommunityPermission) {
        return this.get(r => r.grant_community_permission_for_all(community_id, permission), `Error granting permission for all in community ${community_id}`)
    }
    async revokeCommunityPermissionForAll(community_id: string, permission: CommunityPermission) {
        return this.get(r => r.revoke_community_permission_for_all(community_id, permission), `Error revoking permission for all in community ${community_id}`)
    }

    async removeCommunityMember(community_id: string, member: string) {
        return this.get(r => r.remove_community_member(community_id, member), `Error removing member ${member} from community ${community_id}`)
    }

    async editCommunityChannelName(community_id: string, channel_id: string, name: string) {
        return this.get(r => r.edit_community_channel_name(community_id, channel_id, name), `Error editing channel ${channel_id} name for community ${community_id}`)
    }
    async editCommunityChannelDescription(community_id: string, channel_id: string, description?: string) {
        return this.get(r => r.edit_community_channel_description(community_id, channel_id, description), `Error editing channel ${channel_id} description for community ${community_id}`)
    }

    async grantCommunityChannelPermission(community_id: string, channel_id: string, permission: CommunityChannelPermission, role_id: string) {
        return this.get(r => r.grant_community_channel_permission(community_id, channel_id, permission, role_id), `Error granting channel permission for role ${role_id} in community ${community_id}`)
    }
    async revokeCommunityChannelPermission(community_id: string, channel_id: string, permission: CommunityChannelPermission, role_id: string) {
        return this.get(r => r.revoke_community_channel_permission(community_id, channel_id, permission, role_id), `Error revoking channel permission for role ${role_id} in for community ${community_id}`)
    }
    async grantCommunityChannelPermissionForAll(community_id: string, channel_id: string, permission: CommunityChannelPermission) {
        return this.get(r => r.grant_community_channel_permission_for_all(community_id, channel_id, permission), `Error granting channel permission for community ${community_id}`)
    }
    async revokeCommunityChannelPermissionForAll(community_id: string, channel_id: string, permission: CommunityChannelPermission) {
        return this.get(r => r.revoke_community_channel_permission_for_all(community_id, channel_id, permission), `Error revoking channel permission for community ${community_id}`)
    }

    async getCommunityChannelMessage(community_id: string, channel_id: string, message_id: string) {
        return this.get(r => r.get_community_channel_message(community_id, channel_id, message_id), `Error revoking channel permission for community ${community_id}`)
    }

    async fetchCommunityMessages(community_id: string, channel_id: string, config: FetchMessagesConfig): Promise<Result<WarpError, FetchMessageResponse>> {
        return this.get(async r => {
            let message_options = new MessageOptions()
            switch (config.type) {
                case "Between": {
                    message_options.set_date_range(config.from, config.to) //TODO verify that js Date can be parsed to rust DateTime::<Utc>
                    break
                }
                case "MostRecent": {
                    let total_messages = await r.get_community_channel_message_count(community_id, channel_id)
                    message_options.set_range(Math.min(0, total_messages - config.amount), total_messages)
                    break
                }
                case "Earlier": {
                    message_options.set_date_range(new Date(), config.start_date)
                    message_options.set_reverse()
                    message_options.set_limit(config.limit)
                    break
                }
                case "Later": {
                    message_options.set_date_range(config.start_date, new Date())
                    message_options.set_limit(config.limit)
                    break
                }
            }

            let messages = await this.getMessages(r, community_id, channel_id, message_options)
            if (config.type === "Earlier") {
                messages = messages.reverse()
            }
            let has_more = "limit" in config ? messages.length >= config.limit : false

            let opt = new MessageOptions()
            opt.set_limit(1)
            opt.set_last_message()
            let most_recent = await this.getMessages(r, community_id, channel_id, opt)
            return {
                messages: messages,
                has_more: has_more,
                most_recent: most_recent[most_recent.length].id,
            }
        }, "Error fetching messages")
    }

    private async getMessages(raygun: wasm.RayGunBox, community_id: string, channel_id: string, options: MessageOptions) {
        let msgs = await raygun.get_community_channel_messages(community_id, channel_id, options)
        let messages: Message[] = []
        if (msgs.variant() === wasm.MessagesEnum.List) {
            let warpMsgs = msgs.messages()!
            messages = (await Promise.all(warpMsgs.map(async msg => await this.convertCommunityMessage(community_id, channel_id, msg)))).filter((m: Message | null): m is Message => m !== null)
        }
        return messages
    }

    async communityChannelMessageStatus(community_id: string, channel_id: string, message_id: string) {
        return this.get(r => r.community_channel_message_status(community_id, channel_id, message_id), `Error fetching message status for message ${message_id} in community ${community_id}`)
    }
    async sendCommunityChannelMessage(community_id: string, channel_id: string, message: string[], attachments?: FileAttachment[]) {
        return await this.get(async r => {
            return await this.sendTo(r, community_id, channel_id, message, { attachments })
        }, `Error sending message in channel ${channel_id} for community ${community_id}`)
    }
    async editCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, message: string[]) {
        return this.get(r => r.edit_community_channel_message(community_id, channel_id, message_id, message), `Error revoking channel permission for community ${community_id}`)
    }
    async replyToCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, message: string[], attachments?: FileAttachment[]) {
        return await this.get(async r => {
            return await this.sendTo(r, community_id, channel_id, message, { attachments, replyTo: message_id })
        }, `Error replying to message ${message_id} in channel ${channel_id} for community ${community_id}`)
    }
    async deleteCommunityChannelMessage(community_id: string, channel_id: string, message_id: string) {
        return this.get(r => r.delete_community_channel_message(community_id, channel_id, message_id), `Error deleting message ${message_id} for channel ${channel_id} in community ${community_id}`)
    }
    async pinCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, pin: boolean) {
        return this.get(r => r.pin_community_channel_message(community_id, channel_id, message_id, pin ? wasm.PinState.Pin : wasm.PinState.Unpin), `Error pinning message for community ${community_id}`)
    }
    async reactToCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, state: wasm.ReactionState, emoji: string) {
        let result = await this.get(r => r.react_to_community_channel_message(community_id, channel_id, message_id, state, emoji), "Error reacting to community message")
        return result.map(_ => {
            // TODO: Requires Store changes
            // ConversationStore.editReaction(get(Store.state.activeChat).id, message_id, emoji, state == wasm.ReactionState.Add)
        })
    }

    async downloadFromCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, file: string, size?: number) {
        return await this.get(async r => {
            let result = await r.download_stream_from_community_channel_message(community_id, channel_id, message_id, file)
            return createFileDownloadHandler(file, result, size)
        }, `Error downloading community attachment from community ${community_id} for message ${message_id}`)
    }

    async getCommunityMessageAttachmentRaw(community_id: string, channel_id: string, message_id: string, file: string, options?: { size?: number; type?: string }) {
        return await this.get(async r => {
            let result = await r.download_stream_from_community_channel_message(community_id, channel_id, message_id, file)
            return createFileDownloadHandlerRaw(file, result, options)
        }, `Error downloading community attachment from community ${community_id} for message ${message_id}`)
    }

    async sendCommunityChannelMesssageEvent(community_id: string, channel_id: string, event: wasm.MessageEvent) {
        return await this.get(r => r.send_community_channel_messsage_event(community_id, channel_id, event), `Error sending event ${event}`)
    }
    async cancelCommunityChannelMesssageEvent(community_id: string, channel_id: string, event: wasm.MessageEvent) {
        return await this.get(r => r.cancel_community_channel_messsage_event(community_id, channel_id, event), `Error sending event ${event}`)
    }

    private async sendTo(raygun: wasm.RayGunBox, community_id: string, channel_id: string, message: string[], settings?: { attachments?: FileAttachment[]; replyTo?: string }): Promise<SendMessageResult> {
        if (settings?.attachments && settings?.attachments.length > 0) {
            let result = await raygun
                .attach_to_community_channel_message(
                    community_id,
                    channel_id,
                    settings?.replyTo,
                    settings?.attachments.map(f => new wasm.AttachmentFile(f.file, f.attachment ? new wasm.AttachmentStream(f.attachment[1], f.attachment[0]) : undefined)),
                    message
                )
                .then(res => {
                    // message_sent event gets fired AFTER this returns
                    // TODO: Requires Store changes
                    // ConversationStore.addPendingMessages(conversation_id, res.get_message_id(), message)
                    createFileAttachHandler(res, (file, updater) => {
                        //TODO: Update file on store
                    })
                    return res
                })
            return {
                message: result.get_message_id(),
                progress: result,
            }
        }
        return {
            message: await (settings?.replyTo ? raygun.reply_to_community_channel_message(community_id, channel_id, settings.replyTo, message) : raygun.send_community_channel_message(community_id, channel_id, message)).then(messageId => {
                // message_sent event gets fired BEFORE this returns
                // So to
                // 1. unify this system
                // 2. keep it roughly the same as native (as on native due to some channel delays it handles message_sent after #send returns)
                // We add the pending msg here and remove it in message_sent which has a short delay
                // TODO: Requires Store changes
                // ConversationStore.addPendingMessages(conversation_id, messageId, message)
                return messageId
            }),
        }
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
                return failure(handleErrors(`${err}: ${error}`))
            }
        }
        return failure(WarpError.RAYGUN_NOT_FOUND)
    }

    private async convertCommunityMessage(community_id: string, channel_id: string, message: wasm.Message | undefined): Promise<Message | null> {
        if (!message) return null
        let user = get(Store.state.user)
        let remote = message.sender() !== user.key
        if (remote) {
            let sender = await MultipassStoreInstance.identity_from_did(message.sender())
            if (sender) Store.updateUser(sender)
        }
        let attachments = message.attachments()
        let reactions: { [key: string]: Reaction } = {}
        message.reactions().forEach((dids, emoji) => {
            reactions[emoji] = {
                reactors: new Set(dids),
                emoji: emoji,
                highlight: Appearance.Default, //TODO
                description: "", //TODO
            }
        })
        return {
            id: message.id(),
            details: {
                at: message.date(),
                origin: message.sender(),
                remote: remote,
            },
            text: message.lines(),
            inReplyTo: message.replied() ? null : null, // fetch from ConversationStore
            reactions: reactions,
            attachments: attachments.map(f => convertWarpAttachment(f)),
            pinned: message.pinned(),
            type: messageTypeFromTexts(message.lines()),
        }
    }
}

export type CommunityPermission = wasm.CommunityPermission
export const CommunityPermission = wasm.CommunityPermission
export type CommunityChannelPermission = wasm.CommunityChannelPermission
export const CommunityChannelPermission = wasm.CommunityChannelPermission
export const CommunitiesStoreInstance = new CommunitiesStore(WarpStore.warp.raygun)
