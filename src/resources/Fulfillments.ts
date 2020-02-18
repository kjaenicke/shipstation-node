import { IFulfillment, IFulfillmentPaginationResult } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Fulfillments extends BaseResource<IFulfillment> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'fulfillments')
  }

  public async getAll(): Promise<IFulfillmentPaginationResult> {
    const url = this.baseUrl
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })
    return response.data as IFulfillmentPaginationResult
  }
}
