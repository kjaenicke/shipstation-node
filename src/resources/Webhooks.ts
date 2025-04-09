import type { ISubscribeToWebhookOpts, ISubscriptionResponse, IWebhook, IWebhookResult } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Webhooks extends BaseResource<IWebhook> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'webhooks');
  }

  public async getAll(): Promise<IWebhookResult> {
    return this.shipstation.request<IWebhookResult>({
      url: this.baseUrl,
      method: 'GET'
    });
  }

  public async subscribe(data: ISubscribeToWebhookOpts): Promise<ISubscriptionResponse> {
    return this.shipstation.request<ISubscriptionResponse>({
      url: `${this.baseUrl}/subscribe`,
      method: 'POST',
      data
    });
  }

  public async unsubscribe(id: number): Promise<null> {
    await this.shipstation.request({
      url: `${this.baseUrl}/${id}`,
      method: 'DELETE'
    });

    return null;
  }
}
