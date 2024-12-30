import { Color, Format } from "$lib/enums"
import { Store } from "$lib/state/Store"
import { ToastMessage } from "$lib/state/ui/toast"
import { Filesystem, Encoding } from "@capacitor/filesystem"
import { Directory as LocalDirectory } from "@capacitor/filesystem"
import { Share } from "@capacitor/share"
import TimeAgo from "javascript-time-ago"
import { log } from "./Logger"
import { _ } from "svelte-i18n"
import { get } from "svelte/store"

export const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>
    return function (this: any, ...args: any[]) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
}

export function getTimeAgo(dateInput: string | Date) {
    const timeAgo = new TimeAgo("en-US")

    const date: Date = typeof dateInput === "string" ? new Date(dateInput) : dateInput
    return timeAgo.format(date)
}

export function formatStyledText(text: string): string {
    let formattedText = ""
    let currentStyles: string[] = []
    let isFormatting = false

    for (let i = 0; i < text.length; i++) {
        const char = text[i]

        if (char === "&" && i + 1 < text.length) {
            const code = `&${text[i + 1]}`
            i++ // Skip the next character as it's part of the code

            if (Object.values(Color).includes(code as Color)) {
                currentStyles = currentStyles.filter(style => !style.startsWith("color-"))
                if (code !== Color.RESET) {
                    currentStyles.push(`color-${code.replace("&", "")}`)
                } else {
                    currentStyles = []
                }
            } else if (Object.values(Format).includes(code as Format)) {
                if (code === Format.RESET) {
                    currentStyles = []
                } else {
                    const formatClass = `format-${code.replace("&", "")}`
                    if (!currentStyles.includes(formatClass)) {
                        currentStyles.push(formatClass)
                    }
                }
            }

            isFormatting = true
        } else {
            if (isFormatting || formattedText === "") {
                if (formattedText) {
                    formattedText += "</span>"
                }
                formattedText += `<span class="${currentStyles.join(" ")}">`
                isFormatting = false
            }

            formattedText += char
        }
    }

    if (formattedText) {
        formattedText += "</span>"
    }

    return formattedText
}

export async function shareFile(fileName: string, combinedArray: Buffer) {
    try {
        const base64Data = combinedArray.toString("base64")

        const filePath = await Filesystem.writeFile({
            path: fileName,
            data: base64Data!,
            directory: LocalDirectory.Cache,
        })

        await Share.share({
            text: fileName,
            url: filePath.uri,
        })

        log.info(`File shared: ${fileName} successfully`)
    } catch (error) {
        let errorMessage = `${error}`
        log.error("Error when to share file:", fileName, "Error:", errorMessage)
        if (errorMessage.includes("Share canceled")) {
            Store.addToastNotification(new ToastMessage("", get(_)("files.shareFileCanceled"), 2))
            return
        }
    }
}

export async function downloadFileFromWeb(data: any[], size: number, name: string) {
    let options: { size?: number; type?: string } = { size }
    let blob = new File([new Uint8Array(data)], name, { type: options?.type })
    const elem = window.document.createElement("a")
    elem.href = window.URL.createObjectURL(blob)
    elem.download = name
    document.body.appendChild(elem)
    elem.click()
    document.body.removeChild(elem)
}
