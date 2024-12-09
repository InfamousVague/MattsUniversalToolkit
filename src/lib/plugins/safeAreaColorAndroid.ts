import { log } from "$lib/utils/Logger"
import { registerPlugin } from "@capacitor/core"

interface ISafeAreaColorPlugin {
    setStatusBarColor(options: { color: string }): Promise<{ value: string }>
    setNavigationBarColor(options: { color: string }): Promise<{ value: string }>
}

const SafeAreaColorPlugin = registerPlugin<ISafeAreaColorPlugin>("SafeAreaColorPlugin")

async function setStatusBarColor(color: string) {
    try {
        log.info("Calling native android function to change status bar color")
        await SafeAreaColorPlugin.setStatusBarColor({ color })
    } catch (error) {
        log.error("Error setting status bar color:", error)
    }
}

async function setNavigationBarColor(color: string) {
    try {
        log.info("Calling native android function to change navigation bar color")
        await SafeAreaColorPlugin.setNavigationBarColor({ color })
    } catch (error) {
        log.error("Error setting navigation bar color:", error)
    }
}

export function changeSafeAreaColorsOnAndroid(color: string) {
    setStatusBarColor(color)
    setNavigationBarColor(color)
}
