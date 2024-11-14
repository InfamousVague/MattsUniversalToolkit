<script lang="ts">
    import Button from "$lib/elements/Button.svelte"
    import { ConversationStore } from "$lib/state/conversation"
    import { Store } from "$lib/state/Store"
    import { AssetType, shortenAddr, Transfer, wallet, type Asset } from "$lib/utils/Wallet"
    import { RaygunStoreInstance } from "$lib/wasm/RaygunStore"
    import { get } from "svelte/store"
    import { _ } from "svelte-i18n"
    import { Icon, Input, Label, Select, Text } from "$lib/elements"
    import { Appearance, Shape, Size } from "$lib/enums"
    // import QRCodeDisplay from "./QRCodeDisplay.svelte"
    // import QRScanner from "./QRScanner.svelte"
    // import CurrencySelector from "./CurrencySelector.svelte"

    export let onClose
    enum ViewMode {
        None = "",
        Send = "send",
        Receive = "receive",
        QRScanner = "send",
        SendFunds = "SendFunds",
    }
    let transfer = new Transfer()
    let sendCoin = ViewMode.None
    async function sendMessage(text: string) {
        let chat = get(Store.state.activeChat)
        let txt = text.split("\n")
        let result = await RaygunStoreInstance.send(chat.id, txt, [])
        result.onSuccess(res => {
            ConversationStore.addPendingMessages(chat.id, res.message, txt)
        })
    }

    let inputAmount = ""
    let currentView: ViewMode = ViewMode.None
    let scannedQRCode = ""
    function onInputAmount() {
        //remove any input that is not a number or a dot
        inputAmount = inputAmount.replace(/[^0-9.]/g, "")
        //if there is more than 1 dot, only keep the first one
        if (inputAmount.split(".").length > 2) {
            let i = inputAmount.indexOf(".")
            inputAmount = inputAmount.substring(0, i + 1) + inputAmount.substring(i + 1, inputAmount.length).replace(".", "")
        }

        //convert string amount to bigint
        wallet.toBigIntAmount(transfer.asset, inputAmount).then(amount => {
            transfer.amount = amount
            wallet.toAmountPreviewString(transfer.asset, transfer.amount).then(amountPreview => {
                transfer.amountPreview = amountPreview
            })
        })
    }
    function handleQRCodeScanned(event: { detail: string }) {
        scannedQRCode = event.detail
        currentView = ViewMode.None
    }
    onInputAmount()
    function onChangeAssetKind() {
        transfer.asset.id = ""
        transfer.amount = BigInt(0)
        onInputAmount()
        wallet.myAddress(transfer.asset).then(address => {
            transfer.toAddress = address
        })
    }
    onChangeAssetKind()

    function needsAssetId(): boolean {
        return transfer.asset.kind === AssetType.BitcoinRunes || transfer.asset.kind === AssetType.EthereumERC20 || transfer.asset.kind === AssetType.SolanaSPL
    }
</script>

<div class="payment_modal">
    <div class="title">
        <Text size={Size.Large} color="#00B894" centered hook="chat-topbar-username" class="min-text" singleLine>Transfer Funds</Text>
    </div>
    <div class="transfer_type">
        <Button
            appearance={Appearance.Alt}
            on:click={async () => {
                sendCoin = ViewMode.Send
            }}><Icon icon={Shape.DollarOut}></Icon>{$_("payments.send")}</Button>
        <Button
            appearance={Appearance.Alt}
            on:click={async () => {
                sendCoin = ViewMode.Receive
            }}><Icon icon={Shape.DollarIn}></Icon>{$_("payments.request")}</Button>
    </div>
    {#if sendCoin === ViewMode.Send}
        <div class="asset_selector">
            <Label text={$_("payments.type") + ":"}></Label><Select bind:selected={transfer.asset.kind} options={Object.values(AssetType).map(value => ({ value: value, text: value }))} on:change={onChangeAssetKind} />
        </div>
        {#if transfer.toAddress !== ""}
            <div class="address">
                <Label text={$_("payments.address")} />
                <div class="address_QR">
                    <Input value={transfer.toAddress} />
                    <div class="address_button">
                        <Button icon><Icon icon={Shape.QRCode}></Icon></Button>
                    </div>
                    <!-- <Icon icon={Shape.QRCode}></Icon>
                <QRScanner on:qrCodeScanned={handleQRCodeScanned} /> -->
                </div>
            </div>
            <div class="amount">
                <Label text={$_("payments.amount")} />
                <Input bind:value={inputAmount} on:input={onInputAmount} />
            </div>
        {/if}
        <!-- <div class="note">
            <Label text={$_("payments.note")} />
            <Input />
        </div> -->
        <!-- <QRScanner on:qrCodeScanned={handleQRCodeScanned} /> -->

        <!-- <div class="header">
        <CurrencySelector currencies={currencies} bind:selectedCurrency={selectedCurrency} on:currencySelected={handleCurrencySelected} />

        <Button appearance={Appearance.Alt} icon tooltip="History" on:click={handleHistory}>
            <Icon icon={Shape.History} />
        </Button>
    </div> -->

        {#if needsAssetId()}
            <div class="payment_amount">{$_("payments.assetId") + ":"}<Input bind:value={transfer.asset.id} on:change={onInputAmount} /></div>
        {/if}
        <!-- <div class="payment_amount">{transfer.amountPreview}</div> -->
        <!-- <div>{$_("payments.amount") + ":"} <input bind:value={inputAmount} type="text" on:input={onInputAmount} /></div> -->
        <!-- {#if transfer.toAddress !== ""}
            <div>{$_("payments.receiving_to")}: {shortenAddr(transfer.toAddress, 6)}</div>
        {/if} -->
        <div class="send_button">
            <Button
                disabled={!transfer.isValid()}
                on:click={async () => {
                    await sendMessage(transfer.toDisplayString())
                    onClose()
                }}>{$_("payments.create_transaction")}</Button>
        </div>
    {:else if sendCoin === ViewMode.Receive}
        <div class="asset_selector">
            <Label text={$_("payments.type") + ":"}></Label><Select bind:selected={transfer.asset.kind} options={Object.values(AssetType).map(value => ({ value: value, text: value }))} on:change={onChangeAssetKind} />
        </div>
        {#if transfer.toAddress !== ""}
            <div class="address">
                <Label text={$_("payments.address")} />
                <div class="address_QR">
                    <Input value={transfer.toAddress} />
                    <div class="address_button">
                        <Button icon><Icon icon={Shape.QRCode}></Icon></Button>
                    </div>
                    <!-- <Icon icon={Shape.QRCode}></Icon> -->
                    <!-- <QRScanner on:qrCodeScanned={handleQRCodeScanned} /> -->
                </div>
            </div>
            <div class="amount">
                <Label text={$_("payments.amount")} />
                <Input bind:value={inputAmount} on:input={onInputAmount} />
            </div>
        {/if}
        <!-- <div class="note">
            <Label text={$_("payments.note")} />
            <Input />
        </div> -->
        <!-- <QRScanner on:qrCodeScanned={handleQRCodeScanned} /> -->

        <!-- <div class="header">
    <CurrencySelector currencies={currencies} bind:selectedCurrency={selectedCurrency} on:currencySelected={handleCurrencySelected} />

    <Button appearance={Appearance.Alt} icon tooltip="History" on:click={handleHistory}>
        <Icon icon={Shape.History} />
    </Button>
</div> -->

        {#if needsAssetId()}
            <div class="payment_amount">{$_("payments.assetId") + ":"}<Input bind:value={transfer.asset.id} on:change={onInputAmount} /></div>
        {/if}
        <!-- <div class="payment_amount">{transfer.amountPreview}</div> -->
        <!-- <div>{$_("payments.amount") + ":"} <input bind:value={inputAmount} type="text" on:input={onInputAmount} /></div> -->
        <!-- {#if transfer.toAddress !== ""}
            <div>{$_("payments.receiving_to")}: {shortenAddr(transfer.toAddress, 6)}</div>
        {/if} -->
        <div class="send_button">
            <Button
                disabled={!transfer.isValid()}
                on:click={async () => {
                    await sendMessage(transfer.toCmdString())
                    onClose()
                }}>{$_("payments.create_transaction")}</Button>
        </div>
    {/if}
</div>

<style lang="scss">
    .payment_modal {
        padding: var(--gap-less);
        max-width: 300px;
    }
    .address_QR {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        .address_button {
            margin-left: 10px;
        }
    }
    .title {
        gap: var(--gap-less);
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .address {
        padding: var(--gap-less);
        display: block;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .transfer_type {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 5%;
    }
    .amount {
        display: block;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: var(--gap-less);
    }
    .note {
        display: block;
        width: 100%;
        align-items: center;
        justify-content: center;
        padding: var(--gap-less);
    }
    .payment_amount {
        display: inline-flex;
        gap: var(--gap-less);
    }
    .send_button {
        display: flex;
        // width: 100%;
        // justify-content: space-between;
        // align-items: center;
        // padding: 0 25%;
        padding: var(--gap-less);
        :global(button) {
            width: 100%;
        }
    }
    .asset_selector {
        display: block;
        justify-content: space-between;
        align-items: center;
        padding: var(--gap-less);
    }
</style>
