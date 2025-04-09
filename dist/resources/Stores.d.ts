import type Shipstation from '../shipstation';
import type { StoreResponseItem } from '../types';
import type { ListStoresOptions, ListStoresResponse } from '../types';
import { BaseResource } from './Base';
export declare class Stores extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
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
}
