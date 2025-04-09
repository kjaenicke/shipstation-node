import type ShipStation from '../shipstation';
import type { StoreResponseItem } from '../types';
import type { ListStoresOptions, ListStoresResponse } from '../types';
import { BaseResource } from './Base';

export class Stores extends BaseResource {
  constructor(protected override shipstation: ShipStation) {
    super(shipstation, 'stores');
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/get-store/)
   *
   * This Get Store API call uses the `storeId` property to retrieve information related to a specific store.
   *
   * To find the `storeId` for a specific store and also to see the list of stores installed in your account, make a
   * [List Stores call](https://www.shipstation.com/docs/api/stores/list/).
   *
   * @param storeId Unique identifier for the store.
   *
   * @returns The store details.
   */
  public async get(storeId: number): Promise<StoreResponseItem> {
    return this.shipstation.request<StoreResponseItem>({
      url: `${this.baseUrl}/${storeId}`,
      method: 'GET'
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/list/)
   *
   * Retrieve the list of installed stores on the account with this API call.
   *
   * @param params The parameters for the request.
   *
   * @returns The list of stores.
   */
  public async list(params?: ListStoresOptions): Promise<ListStoresResponse> {
    return this.shipstation.request<ListStoresResponse>({
      params,
      url: this.baseUrl,
      method: 'GET'
    });
  }
}
