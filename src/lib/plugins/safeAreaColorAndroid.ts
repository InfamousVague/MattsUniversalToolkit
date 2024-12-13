import { log } from "$lib/utils/Logger"
import { registerPlugin } from "@capacitor/core"
import { StatusBar, Style } from "@capacitor/status-bar"

interface ISafeAreaColorPlugin {
    setStatusBarColor(options: { color: string }): Promise<{ value: string }>
    setNavigationBarColor(options: { color: string }): Promise<{ value: string }>
}

const SafeAreaColorPlugin = registerPlugin<ISafeAreaColorPlugin>("SafeAreaColorPlugin")

async function setStatusBarColor(color: string) {
    try {
        log.info("Calling native android function to change status bar color")
        if (color.toLowerCase() === "white") {
            color = "#FFFFFF"
            log.info(`Converted color "white" to hexadecimal: ${color}`)
            await StatusBar.setStyle({ style: Style.Light })
            log.debug("Change status bar style to light")
        } else {
            await StatusBar.setStyle({ style: Style.Dark })
            log.debug("Change status bar style to dark")
        }

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
