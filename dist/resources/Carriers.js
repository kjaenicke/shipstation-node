var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseResource } from './Base';
export class Carriers extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'carriers');
        this.shipstation = shipstation;
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
    get(carrierCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}?carrierCode=${carrierCode}`,
                method: 'GET'
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/carriers/list/)
     *
     * List all shipping providers connected to this account.
     *
     * @returns A list of carriers.
     */
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: this.baseUrl,
                method: 'GET'
            });
        });
    }
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
    addFunds(carrierCode, amount) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/addfunds`,
                method: 'POST',
                data: { carrierCode, amount }
            });
        });
    }
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
    listPackages(carrierCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/listpackages?carrierCode=${carrierCode}`,
                method: 'GET'
            });
        });
    }
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
    listServices(carrierCode) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/listservices?carrierCode=${carrierCode}`,
                method: 'GET'
            });
        });
    }
}
