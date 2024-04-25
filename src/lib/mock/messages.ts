import { Appearance, MessageAttachmentKind, Shape } from "$lib/enums"
import type { MessageGroup } from "$lib/types"
import { mock_users } from "./users"

import { v4 as uuidv4 } from "uuid"

export let mock_messages: MessageGroup[] = [
    {
        details: {
            at: new Date,
            origin: mock_users[0],
            remote: false,
        },
        messages: [
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[0],
                    remote: false,
                },
                text: ["Hello, world!"],
                inReplyTo: null,
                reactions: [
                    {
                        emoji: "🔥",
                        highlight: Appearance.Primary,
                        count: 3,
                        description: ":fire: you and 2 users reacted.",
                    },
                    {
                        emoji: "🌎",
                        highlight: Appearance.Default,
                        count: 2,
                        description: ":earth: 2 users reacted.",
                    }
                ],
                attachments: [],
            },
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[0],
                    remote: false,
                },
                text: [],
                inReplyTo: null,
                reactions: [],
                attachments: [
                    {
                        kind: MessageAttachmentKind.Image,
                        name: "Library.avif",
                        location: "/assets/library.avif",
                        size: 1291235,
                    },
                    {
                        kind: MessageAttachmentKind.File,
                        name: "Unreal.docx",
                        location: "",
                        size: 284012384,
                    }
                ],
            },
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[0],
                    remote: false,
                },
                text: ["This is another message"],
                inReplyTo: null,
                reactions: [],
                attachments: [],
            },
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[0],
                    remote: false,
                },
                text: ["And one last message"],
                inReplyTo: null,
                reactions: [],
                attachments: [],
            }
        ]
    },
    {
        details: {
            at: new Date,
            origin: mock_users[1],
            remote: true,
        },
        messages: [
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[1],
                    remote: true,
                },
                text: [
                    "Hello humans.",
                    "**woah** _it's_ __markdown__ ~~stuff~~.", 
                ],
                inReplyTo: null,
                reactions: [
                    {
                        emoji: "👽",
                        highlight: Appearance.Default,
                        count: 2,
                        description: ":alien: 2 users reacted."
                    },
                    {
                        emoji: "👀",
                        highlight: Appearance.Default,
                        count: 1,
                        description: ":eyes: 1 user reacted."
                    }
                ],
                attachments: [
                    {
                        kind: MessageAttachmentKind.File,
                        name: "Unreal.docx",
                        location: "",
                        size: 284012384,
                    }
                ],
            },
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[0],
                    remote: false,
                },
                text: [],
                inReplyTo: null,
                reactions: [],
                attachments: [
                    {
                        kind: MessageAttachmentKind.STL,
                        name: "3DBenchy.stl",
                        location: "/assets/3DBenchy.stl",
                        size: 1130000,
                    }
                ],
            },
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[0],
                    remote: false,
                },
                text: [],
                inReplyTo: null,
                reactions: [],
                attachments: [
                    {
                        kind: MessageAttachmentKind.Audio,
                        name: "Sample.mp3",
                        location: "/assets/mp3/sample.mp3",
                        size: 1130000,
                    }
                ],
            },
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[2],
                    remote: true,
                },
                text: [
                    "I am not an alien.",
                ],
                inReplyTo: null,
                reactions: [],
                attachments: [],
            }
        ]
    },
    
    {
        details: {
            at: new Date,
            origin: mock_users[0],
            remote: false,
        },
        messages: [
            {
                id: uuidv4(),
                details: {
                    at: new Date,
                    origin: mock_users[0],
                    remote: false,
                },
                text: [
                    "Hmm, okay!", 
                ],
                inReplyTo: {
                    id: uuidv4(),
                    details: {
                        at: new Date,
                        origin: mock_users[1],
                        remote: true,
                    },
                    text: [
                        "I am not an alien.",
                    ],
                    inReplyTo: null,
                    reactions: [],
                    attachments: [],
                },
                reactions: [],
                attachments: [],
            }
        ]
    }
]