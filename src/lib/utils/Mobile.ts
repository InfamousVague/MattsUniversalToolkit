import { Device } from "@capacitor/device"
import { log } from "./Logger"

export function checkMobile(): boolean {
    return window.matchMedia("screen and (max-width: 800px)").matches
}

let platform: string | null = null

export async function fetchDeviceInfo() {
    const info = await Device.getInfo()
    platform = info.platform
}

export function isAndroidOriOS(): boolean {
    if (platform === null) {
        log.warn("Platform info not yet loaded. Assuming 'false'.")
        return false
    }
    return platform === "ios" || platform === "android"
}

export function isAndroid(): boolean {
    if (platform === null) {
        log.warn("Platform info not yet loaded. Assuming 'false'.")
        return false
    }
    return platform === "android"
}

export function isiOSMobile(): boolean {
    if (platform === null) {
        log.warn("Platform info not yet loaded. Assuming 'false'.")
        return false
    }
    return platform === "ios"
}
