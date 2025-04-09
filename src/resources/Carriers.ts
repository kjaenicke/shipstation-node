import type { ICarrier } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Carriers extends BaseResource {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'carriers');
  }

  public async get(carrierCode: string): Promise<ICarrier> {
    return this.shipstation.request<ICarrier>({
      url: `${this.baseUrl}?carrierCode=${carrierCode}`,
      method: 'GET'
    });
  }

  public async list(): Promise<Array<ICarrier>> {
    return this.shipstation.request<Array<ICarrier>>({
      url: this.baseUrl,
      method: 'GET'
    });
  }
}
