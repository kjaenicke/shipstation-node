import {
  ICreateOrUpdateOrder,
  ICreateOrUpdateOrderBulkResponse,
  IOrder,
  IOrderPaginationResult
} from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Orders extends BaseResource<IOrder> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'orders')
  }

  public async getAll(): Promise<IOrderPaginationResult> {
    const url = this.baseUrl
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })
    return response.data as IOrderPaginationResult
  }

  public async createOrUpdate(data: ICreateOrUpdateOrder): Promise<IOrder> {
    const url = `${this.baseUrl}/createorder`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    })
    return response.data as IOrder
  }

  public async createOrUpdateBulk(
    data: ICreateOrUpdateOrder[]
  ): Promise<ICreateOrUpdateOrderBulkResponse> {
    const url = `${this.baseUrl}/createorders`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    })

    return response.data as ICreateOrUpdateOrderBulkResponse
  }
}
