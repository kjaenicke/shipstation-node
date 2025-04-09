import type { WebhookEventType } from '../models/Webhook';

export interface SubscribeToWebhookOptions {
  /** The URL to send the webhooks to */
  target_url: string;
  /** The type of webhook to subscribe to. */
  event: WebhookEventType;
  /**
   * Unique identifier that specifies a store.
   *
   * If passed in, the webhooks will only be triggered for this `store_id`.
   */
  store_id?: number;
  /** Display name for the webhook */
  friendly_name?: string;
}

export interface SubscriptToWebhookResponse {
  /** The ID of the webhook. */
  id: number;
}

export interface WebhookResponseItem {
  IsLabelAPIHook: boolean;
  WebHookID: number;
  SellerID: number;
  StoreID: number;
  HookType: WebhookEventType;
}

export type ListWebhooksResponse = Array<WebhookResponseItem>;
