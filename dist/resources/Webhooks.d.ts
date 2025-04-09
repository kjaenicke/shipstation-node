import type { ISubscribeToWebhookOpts, ISubscriptionResponse, IWebhookResult } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Webhooks extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    list(): Promise<IWebhookResult>;
    subscribe(data: ISubscribeToWebhookOpts): Promise<ISubscriptionResponse>;
    unsubscribe(id: number): Promise<null>;
}
