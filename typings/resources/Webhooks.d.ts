import type { ISubscribeToWebhookOpts, ISubscriptionResponse, IWebhook, IWebhookResult } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Webhooks extends BaseResource<IWebhook> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(): Promise<IWebhookResult>;
    subscribe(data: ISubscribeToWebhookOpts): Promise<ISubscriptionResponse>;
    unsubscribe(id: number): Promise<null>;
}
