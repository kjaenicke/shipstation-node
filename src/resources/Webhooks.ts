import { Service } from 'typedi'
import {
  ISubscribeToWebhookOpts,
  ISubscriptionResponse,
  IWebhook,
  IWebhookPaginationResult
} from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

@Service()
export class Webhooks extends BaseResource<IWebhook> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'webhooks')
  }

  public async getAll(): Promise<IWebhookPaginationResult> {
    const url = this.baseUrl
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })
    return response.data as IWebhookPaginationResult
  }

  public async subscribe(
    data: ISubscribeToWebhookOpts
  ): Promise<ISubscriptionResponse> {
    const url = `${this.baseUrl}/subscribe`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    })
    return response.data as ISubscriptionResponse
  }

  public async unsubscribe(id: number): Promise<null> {
    const url = `${this.baseUrl}/${id}`
    await this.shipstation.request({
      url,
      method: RequestMethod.DELETE
    })

    return null
  }
}
