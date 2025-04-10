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
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/stores/list-marketplaces/)
     *
     * Lists the marketplaces that can be integrated with ShipStation.
     *
     * @returns The list of marketplaces.
     */
    listMarketplaces() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/marketplaces`,
                method: 'GET'
            });
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
    deactivate(storeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/deactivate`,
                method: 'POST',
                data: { storeId }
            });
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
    getRefreshRate(storeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/getrefreshstatus?storeId=${storeId}`,
                method: 'GET'
            });
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
    reactivate(storeId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/reactivate`,
                method: 'POST',
                data: { storeId }
            });
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
    refresh(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/refresh`,
                method: 'POST',
                params
            });
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
    update(storeId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/${storeId}`,
                method: 'PUT',
                data
            });
        });
    }
}
