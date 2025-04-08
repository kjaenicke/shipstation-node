import type { IFulfillment, IFulfillmentPaginationResult } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Fulfillments extends BaseResource<IFulfillment> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'fulfillments');
  }

  public async getAll(params?: object): Promise<IFulfillmentPaginationResult> {
    return this.shipstation.request<IFulfillmentPaginationResult>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }
}
