import type { IStore } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export interface IGetAllStoresOptions {
  showInactive?: boolean;
  marketplaceId?: number;
}

export class Stores extends BaseResource {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'stores');
  }

  public async get(storeId: number): Promise<IStore> {
    return this.shipstation.request<IStore>({
      url: `${this.baseUrl}/${storeId}`,
      method: 'GET'
    });
  }

  public async list(params?: IGetAllStoresOptions): Promise<Array<IStore>> {
    return this.shipstation.request<Array<IStore>>({
      params,
      url: this.baseUrl,
      method: 'GET'
    });
  }
}
