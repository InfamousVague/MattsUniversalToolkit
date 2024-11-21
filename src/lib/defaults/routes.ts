import { Route, Shape } from "$lib/enums"
import type { NavRoute } from "$lib/types"

export let routes: NavRoute[] = [
    // {
    //     to: Route.Wallet,
    //     icon: Shape.Wallet,
    //     name: "Wallet",
    // },
    {
        to: Route.Files,
        icon: Shape.Folder,
        name: "Files",
    },
    {
        to: Route.Chat,
        icon: Shape.ChatBubble,
        name: "Chat",
    },
    {
        to: Route.Friends,
        icon: Shape.Users,
        name: "Friends",
    },
    {
        to: Route.Settings,
        icon: Shape.Cog,
        name: "Settings",
    },
]
