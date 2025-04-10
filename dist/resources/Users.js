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
export class Users extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'users');
        this.shipstation = shipstation;
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/users/list/)
     *
     * @returns A list of users.
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
