import type { IFulfillment, IFulfillmentPaginationResult } from '../models';
import type Shipstation from '../shipstation';
import { RequestMethod } from '../shipstation';
import { BaseResource } from './Base';

export class Fulfillments extends BaseResource<IFulfillment> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'fulfillments');
  }

  public async getAll(opts?: object): Promise<IFulfillmentPaginationResult> {
    const query = this.buildQueryStringFromParams(opts);
    const url = this.baseUrl + query;

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    });
    return response.data as IFulfillmentPaginationResult;
  }
}
