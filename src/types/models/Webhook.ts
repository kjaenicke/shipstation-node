export type WebhookEventType =
  | 'ORDER_NOTIFY'
  | 'ITEM_ORDER_NOTIFY'
  | 'SHIP_NOTIFY'
  | 'ITEM_SHIP_NOTIFY'
  | 'FULFILLMENT_SHIPPED'
  | 'FULFILLMENT_REJECTED';

export interface Webhook {
  /**
   * Use this URL to get the resource that triggered the webhook. 200-character limit. Access the URL with ShipStation
   * API Basic Authentication credentials.
   */
  resource_url: string;
  /** The event type that triggered the webhook. */
  resource_type: WebhookEventType;
}
