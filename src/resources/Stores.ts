import type { IStore } from '../models';
import type Shipstation from '../shipstation';
import { RequestMethod } from '../shipstation';
import { BaseResource } from './Base';

export interface IGetAllStoresOptions {
  showInactive?: boolean;
  marketplaceId?: number;
}

export class Stores extends BaseResource<IStore> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'stores');
  }

  public async getAll(opts?: IGetAllStoresOptions): Promise<Array<IStore>> {
    let url = this.baseUrl;

    if (typeof opts !== 'undefined') {
      if (typeof opts.showInactive !== 'undefined') {
        url += `?showInactive=${opts.showInactive}`;
      }

      if (typeof opts.marketplaceId !== 'undefined') {
        const marketplaceQuery = `marketplaceId=${opts.marketplaceId}`;
        url += url.includes('?') ? `&${marketplaceQuery}` : `?${marketplaceQuery}`;
      }
    }

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    });

    return response.data as Array<IStore>;
  }
}
