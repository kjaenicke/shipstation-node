import { Service } from 'typedi'
import { IOrder, IOrderPaginationResult } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'

@Service()
export class Orders {
  private baseUrl: string = 'orders'

  constructor(private shipstation: Shipstation) {}

  public async get(orderId: number): Promise<IOrder> {
    const url = `${this.baseUrl}${orderId}`
    const response = await this.shipstation.request(url, RequestMethod.GET)
    return response.data as IOrder
  }

  public async getAll(): Promise<IOrderPaginationResult> {
    const url = this.baseUrl
    const response = await this.shipstation.request(url, RequestMethod.GET)
    return response.data as IOrderPaginationResult
  }
}
