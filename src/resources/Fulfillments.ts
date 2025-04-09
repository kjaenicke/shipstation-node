import type { IFulfillmentPaginationResult } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Fulfillments extends BaseResource {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'fulfillments');
  }

  public async list(params?: object): Promise<IFulfillmentPaginationResult> {
    return this.shipstation.request<IFulfillmentPaginationResult>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }
}
