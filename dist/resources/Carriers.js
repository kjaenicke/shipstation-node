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
}
