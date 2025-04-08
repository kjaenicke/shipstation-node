import type { ICarrier } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Carriers extends BaseResource<ICarrier> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'carriers');
  }

  public async getAll(): Promise<Array<ICarrier>> {
    return this.shipstation.request<Array<ICarrier>>({
      url: this.baseUrl,
      method: 'GET'
    });
  }
}
