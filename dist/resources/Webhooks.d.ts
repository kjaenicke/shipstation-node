import type { SubscribeToWebhookOptions, SubscriptToWebhookResponse, ListWebhooksResponse } from '../types';
import type ShipStation from '../shipstation';
import { BaseResource } from './Base';
export declare class Webhooks extends BaseResource {
    protected shipstation: ShipStation;
    constructor(shipstation: ShipStation);
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/webhooks/list/)
     *
     * Retrieves a list of registered webhooks for the account.
     *
     * @returns A list of webhooks.
     */
    list(): Promise<ListWebhooksResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/webhooks/subscribe/)
     *
     * Subscribes to a specific type of webhook. If a `store_id` is passed in, the webhooks will only be triggered for
     * that specific `store_id`. The `event` type that is passed in will determine what type of webhooks will be sent.
     *
     * Webhooks will be sent to the URL specified in the `target_url`. The HTTP request will be sent via POST and will
     * contain a [webhook JSON object](https://www.shipstation.com/docs/api/models/webhook/) in the body.
     *
     * Regardless of how the webhook was created, you can only modify an existing webhook through your ShipStation UI and
     * application account Settings. To view and edit your webhooks via the application UI, log in to ShipStation and go
     * to `Settings > Integrations > Integration Partners` under Integrations in the [Account Settings](https://ss.shipstation.com/#/settings/integrations).
     * Learn more about webhooks in ShipStation's UI in this [ShipStation Webhooks KB article](https://help.shipstation.com/hc/en-us/articles/360025856252).
     *
     * @param data The data to subscribe to the webhook.
     *
     * @returns The subscription response.
     */
    subscribe(data: SubscribeToWebhookOptions): Promise<SubscriptToWebhookResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/webhooks/unsubscribe/)
     *
     * Unsubscribes from a certain webhook.
     *
     * To view and edit your webhooks via the application UI, log in to ShipStation and go to
     * `Settings > Integrations > Integration Partners` under Integrations in the [Account Settings](https://ss.shipstation.com/#/settings/integrations).
     *
     * Learn more about webhooks in ShipStation's UI in this [ShipStation Webhooks KB article](https://help.shipstation.com/hc/en-us/articles/360025856252).
     *
     * @param webhookId A unique ID generated by ShipStation and assigned to each webhook.
     */
    unsubscribe(webhookId: number): Promise<void>;
}
