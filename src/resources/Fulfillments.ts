import type { ListFulfillmentsOptions, ListFulfillmentsResponse } from '../types';
import type ShipStation from '../shipstation';
import { BaseResource } from './Base';

export class Fulfillments extends BaseResource {
  constructor(protected override shipstation: ShipStation) {
    super(shipstation, 'fulfillments');
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/fulfillments/list-fulfillments/)
   *
   * The List Fulfillments API call obtains a list of fulfillments that match the specified criteria.
   *
   * NOTE: Orders that have been
   * [marked as shipped](https://www.shipstation.com/docs/api/orders/mark-as-shipped/) either through the UI or the API
   * will appear in the response as they are considered fulfillments.
   *
   * @param params The parameters for the request.
   *
   * @returns A list of fulfillments.
   */
  public async list(params?: ListFulfillmentsOptions): Promise<ListFulfillmentsResponse> {
    return this.shipstation.request<ListFulfillmentsResponse>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }
}
