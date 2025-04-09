import type ShipStation from '../shipstation';
import type { CarrierResponseItem, ListCarriersResponse } from '../types';
import { BaseResource } from './Base';

export class Carriers extends BaseResource {
  constructor(protected override shipstation: ShipStation) {
    super(shipstation, 'carriers');
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/carriers/get/)
   *
   * Retrieves the shipping carrier account details for the specified `carrierCode`. Use this method to determine a
   * carrier's account balance.
   *
   * To find a specific `carrierCode`, make an API Call to [list the carriers](https://www.shipstation.com/docs/api/carriers/list/)
   * associated with your account.
   *
   * @param carrierCode The code of the carrier to retrieve.
   *
   * @returns The carrier details.
   */
  public async get(carrierCode: string): Promise<CarrierResponseItem> {
    return this.shipstation.request<CarrierResponseItem>({
      url: `${this.baseUrl}?carrierCode=${carrierCode}`,
      method: 'GET'
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/carriers/list/)
   *
   * List all shipping providers connected to this account.
   *
   * @returns A list of carriers.
   */
  public async list(): Promise<ListCarriersResponse> {
    return this.shipstation.request<ListCarriersResponse>({
      url: this.baseUrl,
      method: 'GET'
    });
  }
}
