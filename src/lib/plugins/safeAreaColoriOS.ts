import { log } from "$lib/utils/Logger"
import { registerPlugin } from "@capacitor/core"
import { StatusBar, Style } from "@capacitor/status-bar"

interface ISafeAreasColorPlugin {
    changeSafeAreasColorOniOS(options: { color: string }): Promise<{ value: string }>
}

const Echo = registerPlugin<ISafeAreasColorPlugin>("SafeAreasColor")

async function setNewSafeAreasColorOniOS(color: string) {
    try {
        log.info("Calling native iOS function to change status bar color")

        // Check if the color is 'white' and convert to hex
        if (color.toLowerCase() === "white") {
            color = "#FFFFFF"
            log.info(`Converted color "white" to hexadecimal: ${color}`)
            await StatusBar.setStyle({ style: Style.Light })
            log.debug("Change status bar style to light")
        } else {
            await StatusBar.setStyle({ style: Style.Dark })
            log.debug("Change status bar style to dark")
        }

        await Echo.changeSafeAreasColorOniOS({ color })
    } catch (error) {
        log.error("Error trying to call swift function:", error)
    }
}

export function changeSafeAreaColorsOniOS(color: string) {
    setNewSafeAreasColorOniOS(color)
}
