import { IShipment, IShippingRate, IShippingRateOptions } from '../models'
import { ICreateLabelOptions } from '../models/CreateLabelOptions'
import { IVoidLabel, IVoidLabelOptions } from '../models/VoidLabel'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export class Shipments extends BaseResource<IShipment> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'shipments')
  }

  public async getAll(opts?: object): Promise<IShipment[]> {
    const query = this.buildQueryStringFromParams(opts)
    const url = this.baseUrl + query

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })
    return response.data as IShipment[]
  }

  public async getRates(data?: IShippingRateOptions): Promise<IShippingRate[]> {
    const url = this.baseUrl + '/getrates'

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data,
    })
    return response.data as IShippingRate[]
  }

  public async createLabel(data: ICreateLabelOptions): Promise<IShipment> {
    const url = this.baseUrl + '/createlabel'

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    })
    return response.data as IShipment
  }

  public async voidLabel(data: IVoidLabelOptions): Promise<IVoidLabel> {
    const url = this.baseUrl + '/voidlabel'

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    })
    return response.data as IVoidLabel
  }
}
