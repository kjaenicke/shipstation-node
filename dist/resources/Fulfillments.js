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
export class Fulfillments extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'fulfillments');
        this.shipstation = shipstation;
    }
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
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: this.baseUrl,
                method: 'GET',
                params
            });
        });
    }
}
