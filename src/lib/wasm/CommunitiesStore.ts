import { get, writable, type Writable } from "svelte/store"
import * as wasm from "warp-wasm"
import { WarpStore } from "./WarpStore"
import { type Cancellable } from "$lib/utils/CancellablePromise"
import { failure, success, type Result } from "$lib/utils/Result"
import { handleErrors, WarpError } from "./HandleWarpErrors"

class CommunitiesStore {
    private raygunWritable: Writable<wasm.RayGunBox | null>

    constructor(raygun: Writable<wasm.RayGunBox | null>) {
        this.raygunWritable = raygun
    }

    // async getCommunityStream(community_id: string): Promise<AsyncIterator> {

    // }
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

    async grantCommunityChannelPermission(community_id: string, channel_id: string, permission: CommunityChannelPermission, role_id: string)
    async revokeCommunityChannelPermission(community_id: string, channel_id: string, permission: CommunityChannelPermission, role_id: string)
    async grantCommunityChannelPermissionForAll(community_id: string, channel_id: string, permission: CommunityChannelPermission)
    async revokeCommunityChannelPermissionForAll(community_id: string, channel_id: string, permission: CommunityChannelPermission)

    async getCommunityChannelMessage(community_id: string, channel_id: string, message_id: string)
    async getCommunityChannelMessages(community_id: string, channel_id: string, options: MessageOptions)
    async getCommunityChannelMessageCount(community_id: string, channel_id: string)
    async getCommunityChannelMessageReference(community_id: string, channel_id: string, message_id: string)
    async getCommunityChannelMessageReferences(community_id: string, channel_id: string, options: MessageOptions)

    async communityChannelMessageStatus(community_id: string, channel_id: string, message_id: string)
    async sendCommunityChannelMessage(community_id: string, channel_id: string, message: string[])
    async editCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, message: string[])
    async replyToCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, message: string[])
    async deleteCommunityChannelMessage(community_id: string, channel_id: string, message_id: string)
    async pinCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, state: PinState)
    async reactToCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, state: ReactionState, emoji: string)
    async sendCommunityChannelMesssageEvent(community_id: string, channel_id: string, event: MessageEvent)
    async cancelCommunityChannelMesssageEvent(community_id: string, channel_id: string, event: MessageEvent)
    async attachToCommunityChannelMessage(community_id: string, channel_id: string, message_id: string | undefined, files: AttachmentFile[], message: string[])
    async downloadFromCommunityChannelMessage(community_id: string, channel_id: string, message_id: string, file: string) {}
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
}

export type CommunityPermission = wasm.CommunityPermission
export const CommunityPermission = wasm.CommunityPermission
export type CommunityChannelPermission = wasm.CommunityChannelPermission
export const CommunityChannelPermission = wasm.CommunityChannelPermission
export const CommunitiesStoreInstance = new CommunitiesStore(WarpStore.warp.raygun)
