import { Service } from 'typedi'
import { IFulfillment, IFulfillmentPaginationResult } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'

@Service()
export class Fulfillments {
  private baseUrl: string = 'fulfillments'

  constructor(private shipstation: Shipstation) {}

  public async get(carrierId: number): Promise<IFulfillment> {
    const url = `${this.baseUrl}${carrierId}`
    const response = await this.shipstation.request(url, RequestMethod.GET)
    return response.data() as IFulfillment
  }

  public async getAll(): Promise<IFulfillmentPaginationResult> {
    const url = this.baseUrl
    const response = await this.shipstation.request(url, RequestMethod.GET)
    return response.data as IFulfillmentPaginationResult
  }
}
