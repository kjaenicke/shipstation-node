import type ShipStation from '../shipstation';
import type { AddFundsResponse, CarrierResponseItem, ListCarriersResponse, ListPackagesResponse, ListServicesResponse } from '../types';
import { BaseResource } from './Base';
export declare class Carriers extends BaseResource {
    protected shipstation: ShipStation;
    constructor(shipstation: ShipStation);
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
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/carriers/add-funds/)
     *
     * **Requires approval from apisupport@shipstation.com before use...**
     *
     * Adds funds to a carrier account using the payment information on file.
     *
     * **Requirements:**
     * - You'll need a `carrierCode` to make this API call.
     * - To find a specific `carrierCode`, make an API call to
     * [list the carriers](https://www.shipstation.com/docs/api/carriers/list/) associated with your account.
     *
     * @param carrierCode The carrier to add funds to.
     * @param amount The dollar amount to add to the account. The minimum value that can be added is $10.00. The maximum value is $10,000.00.
     *
     * @returns The updated carrier details.
     */
    addFunds(carrierCode: string, amount: number): Promise<AddFundsResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/carriers/list-packages/)
     *
     * Retrieves a list of packages for the specified carrier.
     *
     * To find a specific `carrierCode`, make an API Call to
     * [list the carriers](https://www.shipstation.com/docs/api/carriers/list/) associated with your account.
     *
     * @param carrierCode The carrier's code
     *
     * @returns A list of packages.
     */
    listPackages(carrierCode: string): Promise<ListPackagesResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/carriers/list-packages/)
     *
     * Retrieves the list of available shipping services provided by the specified carrier.
     *
     * To find a specific `carrierCode`, make an API Call to
     * [list the carriers](https://www.shipstation.com/docs/api/carriers/list/) associated with your account.
     *
     * @param carrierCode The carrier's code
     *
     * @returns A list of services.
     */
    listServices(carrierCode: string): Promise<ListServicesResponse>;
}
