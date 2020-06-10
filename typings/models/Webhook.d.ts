import { IPaginatedResult } from './Pagination';
export declare type WebhookEventType = 'ORDER_NOTIFY' | 'ITEM_ORDER_NOTIFY' | 'SHIP_NOTIFY' | 'ITEM_SHIP_NOTIFY';
export interface IWebhook {
    resource_url: string;
    resource_type: WebhookEventType;
}
export interface IWebhookPaginationResult extends IPaginatedResult {
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
