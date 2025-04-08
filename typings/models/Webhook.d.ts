export type WebhookEventType = 'ORDER_NOTIFY' | 'ITEM_ORDER_NOTIFY' | 'SHIP_NOTIFY' | 'ITEM_SHIP_NOTIFY';
export interface IWebhook {
    IsLabelAPIHook: boolean;
    WebHookID: number;
    SellerID: number;
    StoreID: number;
    HookType: WebhookEventType;
    MessageFormat: 'Json';
    Url: string;
    Name: string;
    BulkCopyBatchID: number | null;
    BulkCopyRecordID: number | null;
    Active: boolean;
}
export interface IWebhookResult {
    webhooks: IWebhook[];
}
export interface ISubscribeToWebhookOpts {
    target_url: string;
    event: WebhookEventType;
    store_id?: number;
    friendly_name: string;
}
export interface ISubscriptionResponse {
    id: number;
}
