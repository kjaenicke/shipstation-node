import type { ListFulfillmentsOptions, ListFulfillmentsResponse } from '../types';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Fulfillments extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
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
    list(params?: ListFulfillmentsOptions): Promise<ListFulfillmentsResponse>;
}
