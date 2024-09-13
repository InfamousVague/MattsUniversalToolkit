import { CallDirection } from "$lib/enums"
import { SettingsStore } from "$lib/state"
import { Store } from "$lib/state/Store"
import { log } from "$lib/utils/Logger"
import { RaygunStoreInstance } from "$lib/wasm/RaygunStore"
import { Peer, type DataConnection, type MediaConnection } from "peerjs"
import { cal } from "svelte-highlight/languages"
import { _ } from "svelte-i18n"
import { get } from "svelte/store"

export enum VoiceRTCMessageType {
    Calling = "CALLING_USER",
    LeavingCall = "LEAVING_CALL",
    JoinedCall = "JOINED_CALL",
    EnabledVideo = "ENABLED_VIDEO",
    DisabledVideo = "DISABLED_VIDEO",
    EnabledAudio = "ENABLED_AUDIO",
    DisabledAudio = "DISABLED_AUDIO",
    None = "NONE",
}

export type RemoteStream = {
    user: VoiceRTCUser
    stream: MediaStream | null
}

type VoiceRTCOptions = {
    audio: {
        enabled: boolean
        deafened: boolean
    }
    video: {
        enabled: boolean
        selfie: boolean
    }
    call: {
        onlyAudioCall: boolean
    }
}

export type VoiceRTCUser = {
    did: string
    username: string
    videoEnabled: boolean
    audioEnabled: boolean
    isDeafened: boolean
}

type VoiceMessage = {
    type: VoiceRTCMessageType
    channel: string
    userInfo: VoiceRTCUser
    other?: any
}

enum ToggleType {
    Video,
    Mute,
    Deafen,
}

type CallMeta = {
    channel: string
    userInfo: {
        did: string
        username: string
        videoEnabled: boolean
        audioEnabled: boolean
        isDeafened: boolean
    }
    peers: string[]
}

const AUDIO_WINDOW_SIZE = 256
const VOLUME_THRESHOLD = 10

export class PeerMesh {
    voice: VoiceRTC
    remotePeers: RemotePeer[] = []
    /**
     * List of peer ids which are already connected
     */
    connectedPeers: Set<string> = new Set()
    callStartTime: Date | null = null
    inCall: boolean = false

    constructor(voice: VoiceRTC) {
        this.voice = voice
    }

    init(recipients: string[]) {
        this.remotePeers = recipients.map(did => {
            return new RemotePeer(did)
        })
    }

    readyForCalling() {
        return this.remotePeers.find(p => p.did !== "") !== undefined
    }

    empty() {
        return this.connectedPeers.size === 0
    }

    /**
     * Joins this mesh. Will connect and call all peers that are not connected still
     */
    async join(user?: VoiceRTCUser) {
        if (user && !this.remotePeers.find(p => p.did === user.did)) {
            let peer = new RemotePeer(user.did)
            peer.remoteVoiceUser = user
            this.remotePeers.push(peer)
        }
        await this.connectWithRetry(this.voice.localPeer!, this.voice.channel!, this.voice.callOptions)
    }

    /**
     * Adds the user to this mesh
     */
    async connect(user: VoiceRTCUser) {
        let peer = new RemotePeer(user.did)
        peer.remoteVoiceUser = user
        if (!this.remotePeers.find(p => p.did === user.did)) {
            this.remotePeers.push(peer)
            this.connectedPeers.add(peer.remotePeerId)
        }
    }

    /**
     * Leave this mesh. Will disconnect from all peers
     */
    async leave() {
        this.clear()
    }

    async clear() {
        this.remotePeers.forEach(p => p.close())
        this.remotePeers = []
        this.connectedPeers = new Set()
        this.callStartTime = null
    }

    private async connectWithRetry(localPeer: Peer, channel: string, callOptions: VoiceRTCOptions) {
        let connections = this.remotePeers.map(peer => this.connectWithRetryFor(localPeer, channel, callOptions, peer))
        let connected = await new Promise<boolean>((resolve, _) => {
            connections.map(p => {
                p.then(result => {
                    if (result === true) {
                        resolve(true)
                        return
                    }
                })
            })
            Promise.all(connections).then(() => {
                resolve(false)
            })
        })
        if (!connected) {
            log.error("Could not connect to anyone")
        }
    }

    private async connectWithRetryFor(localPeer: Peer, channel: string, callOptions: VoiceRTCOptions, peer: RemotePeer) {
        if (this.connectedPeers.has(peer.remotePeerId)) return true
        const maxRetries = 5
        let attempts = 0
        let connected = false

        while (!connected && attempts < maxRetries) {
            try {
                peer.dataConnection = localPeer.connect(peer.remotePeerId!, {
                    reliable: true,
                    metadata: {
                        did: localPeer!.id,
                        username: get(Store.state.user).name,
                        videoEnabled: callOptions.video.enabled,
                        audioEnabled: callOptions.audio.enabled,
                        isDeafened: callOptions.audio.deafened,
                        channel: channel,
                        callStartTime: this.callStartTime,
                    },
                })

                peer.dataConnection.on("open", () => {
                    connected = true
                    this.connectedPeers.add(peer.remotePeerId!)
                    log.debug(`Connection established successfully.`)
                })
                peer.dataConnection.on("close", () => {
                    this.connectedPeers.delete(peer.remotePeerId)
                    this.remotePeers = this.remotePeers.filter(p => {
                        if (p.remotePeerId !== peer.remotePeerId) {
                            return true
                        }
                        p.close()
                        return false
                    })
                    if (this.empty()) {
                        this.voice.leaveCall(true)
                    }
                })
                await new Promise(resolve => setTimeout(resolve, 2000))
                if (!connected) {
                    if (attempts === maxRetries) {
                        log.error(`Connection to ${peer.remotePeerId} failed.`)
                        return false
                    }
                    log.debug(`Not possible to connect to ${peer.remotePeerId}, trying again.`)
                    continue
                }
                // Call after successfuly connect. But dont wait for it
                new Promise(async () => {
                    let meta: CallMeta = {
                        channel: this.voice.channel!,
                        userInfo: {
                            did: this.voice.localPeer!.id,
                            username: get(Store.state.user).name,
                            videoEnabled: this.voice.callOptions.video.enabled,
                            audioEnabled: this.voice.callOptions.audio.enabled,
                            isDeafened: this.voice.callOptions.audio.deafened,
                        },
                        peers: this.remotePeers.filter(p => p.remotePeerId !== peer.remotePeerId).map(p => p.did),
                    }
                    peer.activeCall = this.voice.localPeer!.call(peer.remotePeerId!, await this.voice.getLocalStream(), {
                        metadata: meta,
                    })
                    peer.activeCall!.on("stream", async remoteStream => {
                        this.inCall = true
                        if (!this.callStartTime) this.callStartTime = new Date()
                        if (this.voice.remoteVideoCreator) this.voice.remoteVideoCreator.create({ user: peer.remoteVoiceUser, stream: remoteStream })
                        await peer.handleRemoteStream(remoteStream, this.voice.remoteVideoCreator?.delete)
                    })
                })
                return true
            } catch (error) {
                attempts += 1
                log.debug(`Attempt ${attempts} failed. Retrying...`)

                if (attempts >= maxRetries) {
                    log.error("Max retries reached. Connection failed.")
                    break
                }
            }
        }
        return false
    }

    async notify(type: VoiceRTCMessageType, other?: any) {
        await Promise.all(
            this.remotePeers.map(p =>
                p.dataConnection?.send({
                    type: type,
                    channel: this.voice.channel,
                    userInfo: {
                        did: this.voice.localPeer!.id,
                        username: get(Store.state.user).name,
                        videoEnabled: this.voice.callOptions.video.enabled,
                        audioEnabled: this.voice.callOptions.audio.enabled,
                        isDeafened: this.voice.callOptions.audio.deafened,
                    },
                    peers: [this.voice.localPeer!.id, ...this.voice.peerMesh.connectedPeers],
                    other,
                })
            )
        )
    }

    getPeer(predicate: (p: RemotePeer) => boolean) {
        return this.remotePeers.find(predicate)
    }

    mutatePeer(predicate: (p: RemotePeer) => boolean, action: (p: RemotePeer) => any) {
        let peer = this.getPeer(predicate)
        if (peer) action(peer)
    }
}

export class RemotePeer {
    did: string
    remotePeerId: string
    remoteVoiceUser: VoiceRTCUser = {
        did: "",
        username: "unknown",
        videoEnabled: false,
        audioEnabled: false,
        isDeafened: false,
    }
    activeCall: MediaConnection | null = null
    dataConnection: DataConnection | null = null

    stream: MediaStream | null = null
    streamHandler?: [ReturnType<typeof setInterval>, AnalyserNode]
    remove?: (user: string) => void

    constructor(id: string) {
        this.did = id
        this.remotePeerId = id.replace("did:key:", "")
        this.remoteVoiceUser = {
            ...this.remoteVoiceUser,
            did: this.did,
            audioEnabled: true,
        }
    }

    toggleStreams(state: boolean, did: string, options: VoiceRTCOptions, channel: string, type: ToggleType) {
        switch (type) {
            case ToggleType.Video: {
                if (state) {
                    this.activeCall?.localStream?.getVideoTracks().forEach(track => (track.enabled = true))
                } else {
                    this.activeCall?.localStream?.getVideoTracks().forEach(track => (track.enabled = false))
                }
                break
            }
            case ToggleType.Mute: {
                if (state) {
                    this.activeCall?.localStream.getAudioTracks().forEach(track => (track.enabled = false))
                } else {
                    this.activeCall?.localStream.getAudioTracks().forEach(track => (track.enabled = true))
                }
                break
            }
            case ToggleType.Deafen: {
                if (state) {
                    this.activeCall?.remoteStream.getAudioTracks().forEach(track => (track.enabled = false))
                    this.activeCall?.localStream.getAudioTracks().forEach(track => (track.enabled = false))
                } else {
                    this.activeCall?.remoteStream.getAudioTracks().forEach(track => (track.enabled = true))
                    this.activeCall?.localStream.getAudioTracks().forEach(track => (track.enabled = true))
                }
                break
            }
        }

        this.dataConnection?.send({
            type: options.video.enabled ? VoiceRTCMessageType.EnabledVideo : VoiceRTCMessageType.DisabledVideo,
            channel: channel,
            userInfo: {
                did: did,
                videoEnabled: options.video.enabled,
                audioEnabled: options.audio,
            },
        })
    }

    private async handleStreamMeta(stream: MediaStream) {
        if (this.streamHandler) {
            this.streamHandler[1].disconnect()
            clearInterval(this.streamHandler[0] as any) // IDE is complaining for some reason
        }
        const audioContext = new window.AudioContext()
        const mediaStreamSource = audioContext.createMediaStreamSource(stream)
        const analyser = audioContext.createAnalyser()
        analyser.fftSize = AUDIO_WINDOW_SIZE
        mediaStreamSource.connect(analyser)
        const dataArray = new Uint8Array(analyser.frequencyBinCount)
        function volume() {
            analyser.getByteFrequencyData(dataArray)
            return dataArray.reduce((sum, value) => sum + value, 0) / dataArray.length
        }

        function updateMeta(did: string) {
            let muted = stream.getTracks().find(track => !track.enabled || track.readyState === "ended") !== undefined
            let speaking = false
            let user = Store.getUser(did)
            let current = get(user)
            if (!muted && volume() < VOLUME_THRESHOLD) {
                speaking = true
            }
            if (current.media.is_muted !== muted || current.media.is_playing_audio !== speaking) {
                user.update(u => {
                    return {
                        ...u,
                        media: {
                            ...u.media,
                            is_muted: muted,
                            is_playing_audio: speaking,
                        },
                    }
                })
            }
        }
        const checker = setInterval(() => updateMeta(this.did), 3000)
        this.streamHandler = [checker, analyser]
    }

    async handleRemoteStream(stream: MediaStream, remove: ((user: string) => void) | undefined) {
        this.handleStreamMeta(stream)
        this.stream = stream
        /// Here will receive data from user that made the call
        // TODO: decide which video to play?
    }

    close() {
        this.activeCall?.localStream?.getTracks().forEach(track => track.stop())
        this.activeCall?.remoteStream?.getTracks().forEach(track => track.stop())
        if (this.streamHandler) {
            this.streamHandler[1].disconnect()
            clearInterval(this.streamHandler[0] as any) // IDE is complaining for some reason
        }
        if (this.activeCall) this.activeCall.close()
        if (this.dataConnection) this.dataConnection.close()
    }
}

export class VoiceRTC {
    channel?: string
    localPeer: Peer | null = null
    localStream: MediaStream | null = null
    localVideoCurrentSrc: HTMLVideoElement | null = null
    remoteVideoCreator?: { create: (stream: RemoteStream) => void; delete: (user: string) => void }

    // The other peers in the call
    peerMesh: PeerMesh = new PeerMesh(this)

    callOptions: VoiceRTCOptions
    incomingCall: MediaConnection | null = null
    makingCall = false
    acceptedIncomingCall = false

    constructor(options: VoiceRTCOptions) {
        this.callOptions = { ...options }
        this.setupLocalPeer()

        this.subscribe()
    }

    subscribe() {
        Store.state.devices.muted.subscribe(async value => this.toggleMute(value))
        Store.state.devices.cameraEnabled.subscribe(async value => this.toggleVideo(value))
        Store.state.devices.deafened.subscribe(async value => this.toggleDeafen(value))
    }

    toggleVideo(state: boolean) {
        this.callOptions.video.enabled = state

        this.peerMesh.remotePeers.forEach(p => p.toggleStreams(state, this.localPeer!.id, this.callOptions, this.channel!, ToggleType.Video))
    }

    toggleMute(state: boolean) {
        this.callOptions.audio.enabled = state

        this.peerMesh.remotePeers.forEach(p => p.toggleStreams(state, this.localPeer!.id, this.callOptions, this.channel!, ToggleType.Mute))
    }

    toggleDeafen(state: boolean) {
        // TODO: This isn't perfect because if you mute yourself, and then deafen yourself, un-deafaning will also unmute you which could be unexpected
        this.callOptions.audio.enabled = state

        this.peerMesh.remotePeers.forEach(p => p.toggleStreams(state, this.localPeer!.id, this.callOptions, this.channel!, ToggleType.Deafen))
    }

    async setVideoElements(remoteVideoElementCreator: { create: (stream: RemoteStream) => void; delete: (user: string) => void }, localVideoCurrentSrc: HTMLVideoElement) {
        this.remoteVideoCreator = remoteVideoElementCreator
        this.localVideoCurrentSrc = localVideoCurrentSrc
        new Promise(resolve => setTimeout(resolve, 500))
    }

    private async setupLocalPeer(reset?: boolean) {
        if ((reset && this.localPeer) || this.localPeer?.disconnected || this.localPeer?.destroyed) {
            this.localPeer.destroy()
            this.localPeer = null
        }
        if (this.localPeer === null) {
            let userId = get(Store.state.user).key
            while (userId === "0x0") {
                userId = get(Store.state.user).key
                await new Promise(resolve => setTimeout(resolve, 500))
            }
            const peerId = userId.replace("did:key:", "")
            this.localPeer = new Peer(peerId)

            this.localPeer!.on("open", id => {
                log.debug(`My peer ID is: ${id}`)
            })

            // Handle incoming connections
            this.localPeer!.on("connection", conn => {
                conn.on("open", () => {
                    /// It will appear to user that is receiving the call
                    log.info(`Receiving connection on channel: ${conn.metadata.channel} from ${conn.metadata.did}, username: ${conn.metadata.username}`)
                })
                conn.on("data", data => {
                    this.handleWithDataReceived(data as VoiceMessage)
                })
            })
            // Handle incoming calls
            this.localPeer!.on("call", async call => {
                let meta: CallMeta = call.metadata
                console.log("Incoming call ", meta)
                // If channel is not defined or channels dont match its a new call. Otherwise they come from peers in the same call
                if (!this.channel || meta.channel !== this.channel) {
                    this.incomingCall = call
                    this.channel = meta.channel
                    Store.setPendingCall(Store.getCallingChat(this.channel!)!, CallDirection.Inbound)
                } else if (this.channel) {
                    this.acceptCallInternal(call)
                }
            })
            this.localPeer!.on("error", this.handleError.bind(this))
        }
    }

    /**
     * Setup a call to make
     * @param recipients users to call
     * @param chatID the chat to make the call in
     * @param onlyAudioCall
     */
    startToMakeACall(recipients: string[], chatID: string, onlyAudioCall: boolean = false) {
        let own = get(Store.state.user).key
        recipients = recipients.filter(r => r !== own)
        this.callOptions.video.enabled = !onlyAudioCall
        this.callOptions.call.onlyAudioCall = onlyAudioCall
        this.callOptions.audio.enabled = true

        this.channel = chatID
        this.makingCall = true
        this.peerMesh.init(recipients)
    }

    /**
     * Actually making the call
     */
    async makeCall() {
        if (!this.makingCall) {
            log.error("Calling not setup")
            return
        }
        let localStream: MediaStream
        try {
            await this.setupLocalPeer()
            // Joins and calls all peers. The mesh contains the to calling peers from #startToMakeACall
            this.peerMesh.join()
            setTimeout(() => {
                if (this.peerMesh.callStartTime === null) {
                    this.leaveCall(true)
                }
            }, 100000)
            Store.setActiveCall(Store.getCallingChat(this.channel!)!, CallDirection.Outbound)
        } catch (error) {
            log.error(`Error making call: ${error}`)
        }
        if (this.localVideoCurrentSrc) {
            this.localVideoCurrentSrc.srcObject = localStream!
            await this.localVideoCurrentSrc.play()
        }
    }

    /**
     * Accept an incoming call with the options
     */
    async acceptCall(audioOnly: boolean = false) {
        console.log("Call accept ", this.incomingCall)
        if (!this.incomingCall) {
            log.error("No call to accept")
            return
        }
        this.callOptions.audio.enabled = audioOnly
        this.callOptions.video.enabled = !audioOnly
        this.callOptions.call.onlyAudioCall = audioOnly
        // If in a existing call leave it first
        this.peerMesh.leave()
        this.peerMesh.init(this.incomingCall.metadata.peers)
        this.acceptCallInternal(this.incomingCall)
        this.incomingCall = null
    }

    private async acceptCallInternal(call: MediaConnection) {
        let meta: CallMeta = call.metadata
        this.peerMesh.connect(meta.userInfo)
        this.channel = meta.channel
        call.answer!(await this.getLocalStream()!)
        this.peerMesh.mutatePeer(
            p => p.remotePeerId === call.peer,
            peer => {
                peer.remoteVoiceUser = meta.userInfo
                peer.activeCall = call
            }
        )
        call.on("stream", async remoteStream => {
            let peer = this.peerMesh.getPeer(p => p.remotePeerId === call.peer)
            if (peer) {
                if (this.remoteVideoCreator) this.remoteVideoCreator.create({ user: peer.remoteVoiceUser, stream: remoteStream })
                await peer.handleRemoteStream(remoteStream, this.remoteVideoCreator?.delete)
            }
        })
        this.acceptedIncomingCall = true
        await this.peerMesh.join()
    }

    async leaveCall(sendEndCallMessage = true) {
        await this.peerMesh.notify(VoiceRTCMessageType.LeavingCall)

        if (sendEndCallMessage && this.peerMesh.callStartTime) {
            const now = new Date()
            const duration = this.getDuration(now)
            const formattedEndTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false })
            const endText = get(_)("settings.calling.endCallMessage", { values: { formattedEndTime: formattedEndTime, duration: duration } })
            await RaygunStoreInstance.send(this.channel!, endText.split("\n"), [])
        } else if (sendEndCallMessage && this.peerMesh.callStartTime === null) {
            const text = get(_)("settings.calling.callMissed")
            await RaygunStoreInstance.send(this.channel!, text.split("\n"), [])
        }

        this.clearResources()

        if (get(Store.state.activeCall)) {
            Store.endCall()
        }

        if (get(Store.state.pendingCall)) {
            Store.denyCall()
        }

        log.error("Call ended and resources cleaned up.")
        this.setupLocalPeer()
    }

    async getLocalStream(replace = false) {
        if (!this.localStream || replace) {
            this.localStream = await this.createLocalStream(replace)
        }
        return this.localStream
    }

    async createLocalStream(updatingCallSetting = false) {
        let localStream
        try {
            let videoInputDevice = get(Store.state.devices.video)
            let audioInputDevice = get(Store.state.devices.input)
            let settingsStore = get(SettingsStore.state)
            localStream = await navigator.mediaDevices.getUserMedia({
                video: this.callOptions.video.enabled
                    ? {
                          aspectRatio: 16 / 9,
                          facingMode: this.callOptions.video.selfie ? "user" : "environment",
                          frameRate: 30,
                          height: { ideal: 1080 },
                          width: { ideal: 1920 },
                          deviceId: videoInputDevice ? { exact: videoInputDevice } : undefined,
                      }
                    : false,
                audio: this.callOptions.audio.enabled
                    ? {
                          echoCancellation: settingsStore.calling.echoCancellation ?? true,
                          noiseSuppression: settingsStore.calling.noiseSuppression ?? true,
                          autoGainControl: settingsStore.calling.automaticGainControl ?? true,
                          sampleRate: settingsStore.calling.bitrate ?? 48000,
                          sampleSize: settingsStore.calling.sampleSize ?? 16,
                          channelCount: settingsStore.calling.channels ?? 2,
                          deviceId: audioInputDevice ? { exact: audioInputDevice } : undefined,
                      }
                    : false,
            })
        } catch (error) {
            log.error(`Error getting user media: ${error}`)
            localStream = await navigator.mediaDevices.getUserMedia({
                video: false,
                audio: true,
            })
        }
        if (updatingCallSetting) {
            this.peerMesh.remotePeers.forEach(peer => {
                if (peer.activeCall !== null) {
                    peer.activeCall?.peerConnection.getSenders().forEach(sender => {
                        if (sender.track?.kind === "video") {
                            sender.replaceTrack(localStream.getVideoTracks()[0])
                        } else if (sender.track?.kind === "audio") {
                            sender.replaceTrack(localStream.getAudioTracks()[0])
                        }
                    })
                }
            })
        }

        return localStream
        /// Let it commented for now.
        // await this.improveAudioQuality()
    }

    // private async improveAudioQuality() {
    //     const audioContext = new window.AudioContext()
    //     const source = audioContext.createMediaStreamSource(this.activeCall?.localStream!)
    //     const destination = audioContext.createMediaStreamDestination()

    //     const gainNode = audioContext.createGain()
    //     const echoCancellation = audioContext.createBiquadFilter()
    //     const noiseSuppression = audioContext.createBiquadFilter()

    //     echoCancellation.type = "lowshelf"
    //     echoCancellation.frequency.setValueAtTime(1000, audioContext.currentTime)
    //     echoCancellation.gain.setValueAtTime(-40, audioContext.currentTime)

    //     noiseSuppression.type = "highpass"
    //     noiseSuppression.frequency.setValueAtTime(2000, audioContext.currentTime)
    //     noiseSuppression.gain.setValueAtTime(-30, audioContext.currentTime)

    //     source.connect(echoCancellation)
    //     echoCancellation.connect(noiseSuppression)
    //     noiseSuppression.connect(gainNode)
    //     gainNode.connect(destination)

    //     const processedStream = new MediaStream()
    //     processedStream.addTrack(destination.stream.getAudioTracks()[0])
    //     processedStream.addTrack(this.activeCall?.localStream!.getVideoTracks()[0]!)
    //     this.activeCall?.localStream!.getVideoTracks().forEach(track => processedStream.addTrack(track))
    // }

    get isInCall(): boolean {
        return this.peerMesh.remotePeers.find(p => p.activeCall !== null) !== undefined
    }

    handleWithDataReceived(dataReceived: VoiceMessage) {
        log.debug(`Data received from ${dataReceived.userInfo.username}: ${dataReceived.type}`)
        switch (dataReceived.type) {
            case VoiceRTCMessageType.Calling:
                this.peerMesh.mutatePeer(
                    p => p.remoteVoiceUser.did === dataReceived.userInfo.did,
                    peer => (peer.remoteVoiceUser = dataReceived.userInfo)
                )
                this.channel = dataReceived.channel
                break
            case VoiceRTCMessageType.LeavingCall:
                if (this.peerMesh.empty()) this.leaveCall(true)
                break
            case VoiceRTCMessageType.JoinedCall:
                this.peerMesh.join(dataReceived.userInfo)
                break
            case VoiceRTCMessageType.EnabledVideo:
            case VoiceRTCMessageType.DisabledVideo:
            case VoiceRTCMessageType.EnabledAudio:
            case VoiceRTCMessageType.DisabledAudio:
                this.updateRemoteUserInfo(dataReceived)
                break
            case VoiceRTCMessageType.None:
                break
            default:
                log.debug(`Unknown message type: ${dataReceived.type}`)
        }
    }

    updateRemoteUserInfo(dataReceived: VoiceMessage) {
        this.peerMesh.mutatePeer(
            p => p.remotePeerId === dataReceived.userInfo.did,
            peer => (peer.remoteVoiceUser = dataReceived.userInfo)
        )
        Store.setActiveCall(Store.getCallingChat(this.channel!)!)
    }

    private getDuration(endTime: Date): string {
        if (!this.peerMesh.callStartTime) return "0:00"

        const durationMs = endTime.getTime() - this.peerMesh.callStartTime.getTime()
        const totalSeconds = Math.floor(durationMs / 1000)
        const minutes = Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60

        if (minutes === 0) {
            const fractionalSeconds = (durationMs / 1000).toFixed(2)
            return `${fractionalSeconds} seconds`
        } else {
            const minutesFormatted = minutes.toString().padStart(2, "0")
            return `${minutesFormatted}min`
        }
    }

    private clearResources() {
        this.channel = undefined
        this.makingCall = false
        this.acceptedIncomingCall = false
        this.incomingCall = null
        this.localStream = null
        if (this.localVideoCurrentSrc) {
            this.localVideoCurrentSrc.pause()
            this.localVideoCurrentSrc.srcObject = null
            this.localVideoCurrentSrc = null
        }
        this.remoteVideoCreator = undefined
        this.peerMesh.clear()
    }

    handleError(error: Error) {
        log.error(`Error: ${error}`)
    }
}

export const VoiceRTCInstance = new VoiceRTC({
    audio: {
        enabled: get(Store.state.devices.muted),
        deafened: false,
    },
    video: {
        enabled: get(Store.state.devices.cameraEnabled),
        selfie: true,
    },
    call: {
        onlyAudioCall: false,
    },
})
