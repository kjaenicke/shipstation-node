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
export class Stores extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'stores');
        this.shipstation = shipstation;
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
    get(storeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/${storeId}`,
                method: 'GET'
            });
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
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                params,
                url: this.baseUrl,
                method: 'GET'
            });
        });
    }
}
