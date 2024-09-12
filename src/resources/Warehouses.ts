import {
  ICreateOrUpdateWarehouse,
  IUpdateOrDeleteWarehouseResponse,
  IWarehouse,
} from '../models'
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

  public async create(data: ICreateOrUpdateWarehouse): Promise<IWarehouse> {
    const url = `${this.baseUrl}/createwarehouse`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data,
    })
    return response.data as IWarehouse
  }

  public async update(
    id: number,
    data: ICreateOrUpdateWarehouse
  ): Promise<IUpdateOrDeleteWarehouseResponse> {
    const url = `${this.baseUrl}/${id}`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.PUT,
      data,
    })
    return response.data as IUpdateOrDeleteWarehouseResponse
  }

  public async delete(id: number): Promise<IUpdateOrDeleteWarehouseResponse> {
    const url = `${this.baseUrl}/${id}`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.DELETE,
    })

    return response.data as IUpdateOrDeleteWarehouseResponse
  }
}
