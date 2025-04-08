import type { ICarrier } from '../models';
import type Shipstation from '../shipstation';
import { RequestMethod } from '../shipstation';
import { BaseResource } from './Base';

export class Carriers extends BaseResource<ICarrier> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'carriers');
  }

  public async getAll(): Promise<Array<ICarrier>> {
    const url = this.baseUrl;
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    });
    return response.data as Array<ICarrier>;
  }
}
