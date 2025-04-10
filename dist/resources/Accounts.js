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
export class Accounts extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'accounts');
        this.shipstation = shipstation;
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/accounts/create/)
     *
     * **Only Available for ShipStation Partner Accounts, see link below.**
     *
     * Creates a new ShipStation account and generates an apiKey and apiSecret to be used by the newly created account.
     *
     * **NOTE:** This endpoint does not require API key and API Secret credentials. The Authorization header can be left
     * off. Use of this specific endpoint requires approval, and is meant only for direct partners of ShipStation.
     *
     * To become a direct partner with ShipStation, or to request more information on becoming a direct partner, we
     * recommend that you
     * [contact our Partners and Integrations team](https://info.shipstation.com/become-a-partner-api-and-custom-store-integrations).
     *
     * @param data The data for the request.
     *
     * @returns The details of the newly created account.
     */
    register(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/registeraccount`,
                method: 'POST',
                data
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/accounts/list-tags/)
     *
     * List all tags defined for this account.
     *
     * @returns A list of tags for the account.
     */
    listTags() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/listtags`,
                method: 'GET'
            });
        });
    }
}
