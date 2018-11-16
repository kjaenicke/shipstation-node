import { Service } from 'typedi'
import { IStore } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'
import { BaseResource } from './Base'

export interface IGetAllStoresOptions {
  showInactive?: boolean
  marketplaceId?: number
}

@Service()
export class Stores extends BaseResource<IStore> {
  constructor(protected shipstation: Shipstation) {
    super(shipstation, 'stores')
  }

  public async getAll(opts?: IGetAllStoresOptions): Promise<IStore[]> {
    let url = this.baseUrl

    if (typeof opts !== 'undefined') {
      if (typeof opts.showInactive !== 'undefined') {
        url += `?showInactive=${opts.showInactive}`
      }

      if (typeof opts.marketplaceId !== 'undefined') {
        const marketplaceQuery = `marketplaceId=${opts.marketplaceId}`
        url +=
          url.indexOf('?') > -1
            ? `&${marketplaceQuery}`
            : `?${marketplaceQuery}`
      }
    }

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })

    return response.data as IStore[]
  }
}
