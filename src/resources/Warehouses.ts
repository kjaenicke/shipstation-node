import { IWarehouse } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Warehouses extends BaseResource<IWarehouse> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'warehouses')
  }

  public async getAll(opts?: object): Promise<IWarehouse[]> {
    const query = this.buildQueryStringFromParams(opts)
    const url = this.baseUrl + query

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })
    return response.data as IWarehouse[]
  }
}
