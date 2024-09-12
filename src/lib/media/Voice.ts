import { CallDirection } from "$lib/enums"
import { SettingsStore } from "$lib/state"
import { Store } from "$lib/state/Store"
import { log } from "$lib/utils/Logger"
import { RaygunStoreInstance } from "$lib/wasm/RaygunStore"
import { Peer, type DataConnection, type MediaConnection } from "peerjs"
import { _, number } from "svelte-i18n"
import { get } from "svelte/store"
import { string } from "three/examples/jsm/nodes/Nodes.js"

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

type VoiceRTCUser = {
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

const AUDIO_WINDOW_SIZE = 256
const VOLUME_THRESHOLD = 10

export class PeerMesh {
    remotePeers: RemotePeer[] = []
    connectedPeers: string[] = []
    callStartTime: Date | null = null

    init(recipients: string[]) {
        this.remotePeers = recipients.map(did => {
            return new RemotePeer(did)
        })
    }

    isCallReady() {
        return this.remotePeers.find(p => p.did !== "") !== undefined
    }

    empty() {
        return this.connectedPeers.length === 0
    }

    async join(localPeer: Peer, channel: string, callOptions: VoiceRTCOptions) {
        await this.connectWithRetry(localPeer, channel, callOptions)
    }

    async leave(did?: string) {
        if (did) {
        } else {
            this.clear()
        }
    }

    async clear() {
        this.remotePeers.forEach(p => p.close())
        this.remotePeers = []
        this.connectedPeers = []
        this.callStartTime = null
    }

    async connectWithRetry(localPeer: Peer, channel: string, callOptions: VoiceRTCOptions) {
        let connections = this.remotePeers.map(peer => this.connectWithRetryFor(localPeer, channel, callOptions, peer))
        let connected = await new Promise<boolean>((resolve, reject) => {
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
        if (connected) {
            log.error("Could not connect to anyone")
        }
    }

    private async connectWithRetryFor(localPeer: Peer, channel: string, callOptions: VoiceRTCOptions, peer: RemotePeer) {
        if (peer.remotePeerId! in this.connectedPeers) return false
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
                    this.connectedPeers.push(peer.remotePeerId!)
                    log.debug("Connection established successfully.")
                })

                await new Promise(resolve => setTimeout(resolve, 2000))
                log.debug(`Not possible to connect to ${peer.remotePeerId}, trying again.`)

                if (!connected && attempts === maxRetries) {
                    log.error(`Connection to ${peer.remotePeerId} failed.`)
                    return false
                }
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

    getPeer(predicate: (p: RemotePeer) => boolean) {
        return this.remotePeers.find(predicate)
    }

    mutatePeer(predicate: (p: RemotePeer) => boolean, action: (p: RemotePeer) => any) {
        let peer = this.getPeer(predicate)
        if (peer) action(peer)
    }

    get(): VoiceRTCUser {
        return {
            did: "",
            username: "unknown",
            videoEnabled: false,
            audioEnabled: false,
            isDeafened: false,
        }
    }
}

export class RemotePeer {
    did: string
    remotePeerId: string | null = null
    remoteVoiceUser: VoiceRTCUser = {
        did: "",
        username: "unknown",
        videoEnabled: false,
        audioEnabled: false,
        isDeafened: false,
    }
    activeCall: MediaConnection | null = null
    dataConnection: DataConnection | null = null

    streamHandler?: [ReturnType<typeof setInterval>, AnalyserNode]
    remove?: (user: string) => void

    constructor(id: string) {
        this.did = id
        this.remotePeerId = id.replace("did:key:", "")
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
        /// Here will receive data from user that made the call
        // TODO: decide which video to play?
        this.remove = remove
    }

    close() {
        this.activeCall?.localStream?.getTracks().forEach(track => track.stop())
        this.activeCall?.remoteStream?.getTracks().forEach(track => track.stop())
        if (this.remove) {
            this.remove(this.did)
        }
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
    peerMesh: PeerMesh = new PeerMesh()

    callOptions: VoiceRTCOptions
    isReceivingCall = false
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
            this.localPeer!.on("connection", this.handlePeerConnection.bind(this))
            // Handle incoming calls
            this.localPeer!.on("call", async call => {
                console.log("oncall pre ", this.channel, call.metadata.channel)
                if (!this.channel || call.metadata.channel === this.channel) {
                    // If we are in the call already directly accept it as as these are just other other users
                    console.log("oncall ", call, this.localStream)
                    if (this.peerMesh.callStartTime) {
                        call.answer!(this.localStream!)
                    } else {
                        this.peerMesh.init(call.metadata.peers)
                        this.channel = call.metadata.channel
                        this.peerMesh.mutatePeer(
                            p => p.remotePeerId === call.peer,
                            peer => (peer.activeCall = call)
                        )
                    }
                    call.on("stream", async remoteStream => {
                        console.log("oncallstream ", remoteStream, this.peerMesh.remotePeers)
                        let peer = this.peerMesh.getPeer(p => p.remotePeerId === call.peer)
                        if (peer) {
                            console.log("creat ", this.remoteVideoCreator)
                            if (this.remoteVideoCreator) this.remoteVideoCreator.create({ user: peer.remoteVoiceUser, stream: remoteStream })
                            await peer.handleRemoteStream(remoteStream, this.remoteVideoCreator?.delete)
                        }
                    })
                } else {
                    // TODO: when you are in a call and someone else calls you
                    // display and if accept disconnect from existing ones
                }
            })
            this.localPeer!.on("error", this.handleError.bind(this))
        }
    }

    private handlePeerConnection(conn: DataConnection) {
        console.log("handle connection", conn, this.peerMesh.callStartTime)
        let inCall = this.peerMesh.callStartTime
        this.peerMesh.mutatePeer(
            p => p.remotePeerId === conn.peer,
            peer => {
                peer.remoteVoiceUser = {
                    did: conn.metadata.did,
                    username: conn.metadata.username,
                    videoEnabled: conn.metadata.videoEnabled,
                    audioEnabled: conn.metadata.audioEnabled,
                    isDeafened: conn.metadata.isDeafened,
                }
                peer.dataConnection = conn
            }
        )

        if (!inCall) {
            this.callOptions.audio.enabled = conn.metadata.audioEnabled
            this.callOptions.video.enabled = conn.metadata.videoEnabled
            this.callOptions.call.onlyAudioCall = this.callOptions.audio.enabled && !this.callOptions.video.enabled

            this.channel = conn.metadata.channel
            this.peerMesh.callStartTime = conn.metadata.callStartTime ? new Date(conn.metadata.callStartTime) : null
            console.log("opt ", this.callOptions, conn.metadata)
        }

        conn.on("open", () => {
            /// It will appear to user that is receiving the call
            if (!this.makingCall) {
                log.info(`Receiving call on channel: ${conn.metadata.channel} from ${conn.metadata.did}, username: ${conn.metadata.username}`)
                this.isReceivingCall = true
                Store.setPendingCall(Store.getCallingChat(this.channel!)!, CallDirection.Inbound)
            }
        })
        conn.on("data", data => {
            this.handleWithDataReceived(data as VoiceMessage)
        })
    }

    startToMakeACall(recipients: string[], chatID: string, onlyAudioCall: boolean = false) {
        this.callOptions.video.enabled = !onlyAudioCall
        this.callOptions.call.onlyAudioCall = onlyAudioCall
        this.callOptions.audio.enabled = true

        this.channel = chatID
        this.makingCall = true
        this.peerMesh.init(recipients)
    }

    async makeCall() {
        if (!this.makingCall) {
            log.error("Calling not setup")
            return
        }
        let localStream: MediaStream
        try {
            await this.setupLocalPeer()
            // Establish dataconnection
            await this.peerMesh.connectWithRetry(this.localPeer!, this.channel!, this.callOptions)

            setTimeout(() => {
                if (this.peerMesh.callStartTime === null) {
                    this.leaveCall(true)
                }
            }, 100000)

            await this.sendData(VoiceRTCMessageType.Calling)

            localStream = await this.getLocalStream()
            // Call the peers
            await this.callPeers()

            Store.setActiveCall(Store.getCallingChat(this.channel!)!, CallDirection.Outbound)
        } catch (error) {
            log.error(`Error making call: ${error}`)
        }
        if (this.localVideoCurrentSrc) {
            this.localVideoCurrentSrc.srcObject = localStream!
            await this.localVideoCurrentSrc.play()
        }
    }

    private async callPeers() {
        let localStream = await this.getLocalStream()
        console.log("calling ", this.channel)
        this.peerMesh.remotePeers.forEach(peer => {
            peer.activeCall = this.localPeer!.call(peer.remotePeerId!, localStream, {
                metadata: {
                    channel: this.channel,
                    userInfo: {
                        did: this.localPeer!.id,
                        username: get(Store.state.user).name,
                        videoEnabled: this.callOptions.video.enabled,
                        audioEnabled: this.callOptions.audio.enabled,
                    },
                    peers: this.peerMesh.remotePeers.filter(p => p.remotePeerId !== peer.remotePeerId).map(p => p.did),
                },
            })

            peer.activeCall!.on("stream", async remoteStream => {
                console.log("onstream ")
                if (!this.peerMesh.callStartTime) this.peerMesh.callStartTime = new Date()
                console.log("creat ", this.remoteVideoCreator)
                if (this.remoteVideoCreator) this.remoteVideoCreator.create({ user: peer.remoteVoiceUser, stream: remoteStream })
                await peer.handleRemoteStream(remoteStream, this.remoteVideoCreator?.delete)
            })
        })
    }

    async acceptCall(chatID: string) {
        // If in a existing call leave it first
        // this.peerMesh.clear()
        this.channel = chatID
        this.acceptedIncomingCall = true
        this.peerMesh.join(this.localPeer!, this.channel!, this.callOptions)
        this.peerMesh.remotePeers.forEach(p => {
            if (!p.streamHandler) {
                p.activeCall!.answer(this.localStream!)
                p.activeCall!.on("stream", async remoteStream => {
                    console.log("oncallstream ", remoteStream, this.peerMesh.remotePeers)
                    console.log("creat ", this.remoteVideoCreator)
                    if (this.remoteVideoCreator) this.remoteVideoCreator.create({ user: p.remoteVoiceUser, stream: remoteStream })
                    await p.handleRemoteStream(remoteStream, this.remoteVideoCreator?.delete)
                })
            }
        })
        await this.sendData(VoiceRTCMessageType.JoinedCall)
    }

    async leaveCall(sendEndCallMessage = true) {
        await this.sendData(VoiceRTCMessageType.LeavingCall)

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
                if (!this.makingCall) {
                    this.isReceivingCall = true
                }
                this.peerMesh.mutatePeer(
                    p => p.remoteVoiceUser.did === dataReceived.userInfo.did,
                    peer => (peer.remoteVoiceUser = dataReceived.userInfo)
                )
                this.channel = dataReceived.channel
                break
            case VoiceRTCMessageType.LeavingCall:
                this.peerMesh.leave(dataReceived.userInfo.did)
                if (this.peerMesh.empty()) this.leaveCall(true)
                break
            case VoiceRTCMessageType.JoinedCall:
                // this.peerMesh.join(this.localPeer!, this.channel!, this.callOptions)
                // this.peerMesh.join.forEach(peer => this.localPeer?.call(peer, this.localVideoCurrentSrc!.srcObject as any))
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

    async sendData(type: VoiceRTCMessageType, other?: any) {
        await Promise.all(
            this.peerMesh.remotePeers.map(p =>
                p.dataConnection?.send({
                    type: type,
                    channel: this.channel,
                    userInfo: {
                        did: this.localPeer!.id,
                        username: get(Store.state.user).name,
                        videoEnabled: this.callOptions.video.enabled,
                        audioEnabled: this.callOptions.audio.enabled,
                        isDeafened: this.callOptions.audio.deafened,
                    },
                    other,
                })
            )
        )
    }

    updateRemoteUserInfo(dataReceived: VoiceMessage) {
        this.channel = dataReceived.channel
        this.peerMesh.mutatePeer(
            p => p.remotePeerId === dataReceived.userInfo.did,
            peer => (peer.remoteVoiceUser = dataReceived.userInfo)
        )
        Store.setActiveCall(Store.getCallingChat(this.channel)!)
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
        this.channel = ""
        this.makingCall = false
        this.acceptedIncomingCall = false
        this.isReceivingCall = false
        this.localStream = null
        if (this.localVideoCurrentSrc) {
            this.localVideoCurrentSrc.pause()
            this.localVideoCurrentSrc.srcObject = null
            this.localVideoCurrentSrc = null
        }
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
