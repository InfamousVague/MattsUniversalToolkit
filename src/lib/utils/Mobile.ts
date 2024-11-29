import { Device } from "@capacitor/device"

export function checkMobile(): boolean {
    return window.matchMedia("screen and (max-width: 800px)").matches
}

export async function isAndroidOriOS(): Promise<boolean> {
    const info = await Device.getInfo()
    return info.platform === "ios" || info.platform === "android"
}
