import type ShipStation from '../shipstation';
import type {
  ListStoresOptions,
  ListStoresResponse,
  DeactivateStoreResponse,
  StoreResponseItem,
  GetRefreshRateResponse,
  ReactivateStoreResponse,
  RefreshStoreOptions,
  RefreshStoreResponse,
  ListMarketplacesResponse
} from '../types';
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

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/list-marketplaces/)
   *
   * Lists the marketplaces that can be integrated with ShipStation.
   *
   * @returns The list of marketplaces.
   */
  public async listMarketplaces(): Promise<ListMarketplacesResponse> {
    return this.shipstation.request<ListMarketplacesResponse>({
      url: `${this.baseUrl}/marketplaces`,
      method: 'GET'
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/deactivate/)
   *
   * Deactivates the specified store.
   *
   * **Requirements:**
   * - You'll need a `storeId` to make this API call.
   * - To find the `storeId` for a specific store and also to see the list of stores installed in your account, make a
   * [List Stores call](https://www.shipstation.com/docs/api/stores/list/).
   *
   * @param storeId ID of the store to deactivate.
   *
   * @returns The status of the deactivate operation.
   */
  public async deactivate(storeId: number): Promise<DeactivateStoreResponse> {
    return this.shipstation.request<DeactivateStoreResponse>({
      url: `${this.baseUrl}/deactivate`,
      method: 'POST',
      data: { storeId }
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/get-refresh-status/)
   *
   * Retrieves the refresh status of a given store.
   *
   * **Requirements:**
   * - You'll need a `storeId` to make this API call.
   * - To find the `storeId` for a specific store and also to see the list of stores installed in your account, make a
   * [List Stores call](https://www.shipstation.com/docs/api/stores/list/).
   *
   * @param storeId Specifies the store whose status will be retrieved.
   *
   * @returns The refresh rate data of the store.
   */
  public async getRefreshRate(storeId: number): Promise<GetRefreshRateResponse> {
    return this.shipstation.request<GetRefreshRateResponse>({
      url: `${this.baseUrl}/getrefreshstatus?storeId=${storeId}`,
      method: 'GET'
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/reactivate/)
   *
   * Reactivates the specified store.
   *
   * **Requirements:**
   * - You'll need a `storeId` to make this API call.
   * - To find the `storeId` for a specific store and also to see the list of stores installed in your account, make a
   * [List Stores call](https://www.shipstation.com/docs/api/stores/list/).
   *
   * @param storeId ID of the store to reactivate.
   *
   * @returns The status of the reactivate operation.
   */
  public async reactivate(storeId: number): Promise<ReactivateStoreResponse> {
    return this.shipstation.request<ReactivateStoreResponse>({
      url: `${this.baseUrl}/reactivate`,
      method: 'POST',
      data: { storeId }
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/refresh/)
   *
   * Initiates a store refresh.
   *
   * To find the `storeId` for a specific store and also to see the list of stores installed in your account, make a
   * [List Stores call](https://www.shipstation.com/docs/api/stores/list/).
   *
   * @param params The parameters for the request.
   *
   * @returns The status of the refresh operation.
   */
  public async refresh(params?: RefreshStoreOptions): Promise<RefreshStoreResponse> {
    return this.shipstation.request<RefreshStoreResponse>({
      url: `${this.baseUrl}/refresh`,
      method: 'POST',
      params
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/stores/update/)
   *
   * Updates an existing store. This call does not currently support partial updates. The entire resource must be
   * provided in the body of the request.
   *
   * This PUT call uses the `storeId` property to update information related to a specific store.
   *
   * To find the `storeId` for a specific store and also to see the list of stores installed in your account, make a
   * [List Stores call](https://www.shipstation.com/docs/api/stores/list/).
   *
   * @param storeId Unique identifier for the store
   *
   * @returns The newly updated store.
   */
  public async update(storeId: number, data: StoreResponseItem): Promise<StoreResponseItem> {
    return this.shipstation.request<StoreResponseItem>({
      url: `${this.baseUrl}/${storeId}`,
      method: 'PUT',
      data
    });
  }
}
