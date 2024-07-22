export * from "./icons"

export const enum ChatType {
    Group,
    DirectMessage,
}

export const enum Locale {
    EN_US = "English (US)",
    ES_MX = "Español (México)",
    PT_BR = "Português (Brasil)",
    PT_PT = "Português (Portugal)",
    DE = "Deutsch",
    SR_RS = "Serbia (Srbija)",
    HR_HR = "Croatia (Hrvatska)",
    PL = "Polski (Polska)",
    BS_BA = "Bosnia and Hercegovina (Bosna i Hercegovina)",
}

export const enum Font {
    Poppins = "Poppins",
    SpaceMono = "SpaceMono",
    ChakraPetch = "ChakraPetch",
    Comfortaa = "Comfortaa",
    Dosis = "Dosis",
    IBMPlexMono = "IBMPlexMono",
    IndieFlower = "IndieFlower",
    JosefinSans = "JosefinSans",
    Noto = "Noto",
    SourceCodePro = "SourceCodePro",
    SpaceGrotesk = "SpaceGrotesk",
    PixelifySans = "PixelifySans",
    MajorMono = "MajorMono",
    Merriweather = "Merriweather",
    PoiretOne = "PoiretOne",
    OpenDyslexic = "OpenDyslexic",
}

export const enum EmojiFont {
    Twemoji = "Twemoji",
    NotoEmoji = "NotoEmoji",
    OpenMoji = "OpenMoji",
    Blobmoji = "Blobmoji",
    Fluent = "Fluent",
}

export const enum Route {
    Home = "/",
    Chat = "/chat",
    Files = "/files",
    Friends = "/friends",
    Wallet = "/wallet",
    Settings = "/settings/profile",
    Unlock = "/auth",
    Pre = "/pre",
}

export const enum FilesItemKind {
    File,
    Folder,
    Image,
}

export const enum SettingsRoute {
    Profile = "/settings/profile",
    Preferences = "/settings/preferences",
    Messages = "/settings/messages",
    AudioVideo = "/settings/audio_video",
    Extensions = "/settings/extensions",
    Keybinds = "/settings/keybinds",
    Accessibility = "/settings/accessibility",
    Notifications = "/settings/notifications",
    About = "/settings/about",
    Licenses = "/settings/licenses",
    Developer = "/settings/developer",
    Inventory = "/settings/inventory",
    Network = "/settings/network",
    Realms = "/settings/realms",
    Gamepad = "/settings/gamepad",
}

export const enum Appearance {
    Default = "",
    Alt = "alt",
    Success = "success",
    Info = "info",
    Warning = "warning",
    Error = "error",
    Primary = "primary",
    Transparent = "transparent",
}

export const enum Size {
    Smallest = "smallest",
    Smaller = "smaller",
    Small = "small",
    Medium = "medium",
    Large = "large",
    Larger = "larger",
    Largest = "largest",
}

export const enum TooltipPosition {
    LEFT,
    MIDDLE,
    RIGHT,
}

export const enum MessagePosition {
    First = "first",
    Middle = "middle",
    Last = "last",
}

export const enum MessageAttachmentKind {
    File = "File",
    Image = "Image",
    URL = "URL",
    User = "User",
    STL = "STL",
    Audio = "Audio",
    Video = "Video",
    Text = "Text",
}

export const enum Status {
    Online = "online",
    Offline = "offline",
    Idle = "idle",
    DoNotDisturb = "do-not-disturb",
}

export const enum KeybindAction {
    IncreaseFontSize = "Increase font size within Uplink.",
    DecreaseFontSize = "Decrease font size within Uplink.",
    ToggleMute = "Mute & un-mute your microphone.",
    ToggleDeafen = "Toggle turning off all sounds including your microphone and headphones.",
    OpenInspector = "Open/Close Web Inspector.",
    ToggleDevmode = "Toggle Developer Mode.",
    FocusUplink = "Hide/Focus Uplink.",
    PushToTalk = "Push to talk.",
    PushToMute = "Push to mute.",
    PushToDeafen = "Push to deafen.",
}

export const enum KeybindState {
    Pressed,
    Released,
}

export enum MessageDirection {
    Inbound,
    Outbound,
    Unknown,
}

export enum InventoryKind {
    Frame = "Profile Picture Frame",
    Overlay = "Profile Overlay",
    Theme = "Application Theme",
    Item = "Item",
}

export enum CommunityChannelKind {
    Text,
    Voice,
    Photo,
    Files,
    Bot,
}

export enum Integrations {
    Generic = "Generic",
    Twitch = "Twitch.tv",
    YouTube = "YouTube",
    Steam = "Steam",
    Spotify = "Spotify",
    BTC = "Bitcoin",
    ETH = "Ethereum",
    SOL = "Solana",
}

export enum IntegrationDisplays {
    Text,
    WalletAddress,
    URL,
    ApplicationURI
}

export enum Identicon {
    Identicon = "identicon",
    Shapes = "shapes",
    PixelArtNeutral = "pixelArtNeutral",
    PixelArt = "pixelArt",
    OpenPeeps = "openPeeps",
    Notionists = "notionists",
    Lorelei = "lorelei",
    Icons = "icons",
    Bots = "bottts",
    BotsNeutral = "botttsNeutral",
    Avataaars = "avataaars",
    AvataaarsNeutral = "avataaarsNeutral"
}
