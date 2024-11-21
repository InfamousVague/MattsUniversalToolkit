// custom-events.d.ts
declare namespace svelteHTML {
    interface HTMLAttributes<T> {
        "on:swipeleft"?: (event: CustomEvent) => void
        "on:swiperight"?: (event: CustomEvent) => void
        "on:swipeup"?: (event: CustomEvent) => void
        "on:swipedown"?: (event: CustomEvent) => void
    }
}
