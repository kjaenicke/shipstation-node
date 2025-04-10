import type ShipStation from '../shipstation';
import type { ListStoresOptions, ListStoresResponse, DeactivateStoreResponse, StoreResponseItem, GetRefreshRateResponse, ReactivateStoreResponse, RefreshStoreOptions, RefreshStoreResponse, ListMarketplacesResponse } from '../types';
import { BaseResource } from './Base';
export declare class Stores extends BaseResource {
    protected shipstation: ShipStation;
    constructor(shipstation: ShipStation);
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
    get(storeId: number): Promise<StoreResponseItem>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/stores/list/)
     *
     * Retrieve the list of installed stores on the account with this API call.
     *
     * @param params The parameters for the request.
     *
     * @returns The list of stores.
     */
    list(params?: ListStoresOptions): Promise<ListStoresResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/stores/list-marketplaces/)
     *
     * Lists the marketplaces that can be integrated with ShipStation.
     *
     * @returns The list of marketplaces.
     */
    listMarketplaces(): Promise<ListMarketplacesResponse>;
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
    deactivate(storeId: number): Promise<DeactivateStoreResponse>;
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
    getRefreshRate(storeId: number): Promise<GetRefreshRateResponse>;
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
    reactivate(storeId: number): Promise<ReactivateStoreResponse>;
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
    refresh(params?: RefreshStoreOptions): Promise<RefreshStoreResponse>;
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
    update(storeId: number, data: StoreResponseItem): Promise<StoreResponseItem>;
}
