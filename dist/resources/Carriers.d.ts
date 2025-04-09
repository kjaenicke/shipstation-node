import type Shipstation from '../shipstation';
import type { CarrierResponseItem, ListCarriersResponse } from '../types';
import { BaseResource } from './Base';
export declare class Carriers extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
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
    get(carrierCode: string): Promise<CarrierResponseItem>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/carriers/list/)
     *
     * List all shipping providers connected to this account.
     *
     * @returns A list of carriers.
     */
    list(): Promise<ListCarriersResponse>;
}
