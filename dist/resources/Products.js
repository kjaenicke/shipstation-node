var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { RequestMethod } from '../shipstation';
import { BaseResource } from './Base';
export class Products extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'products');
        this.shipstation = shipstation;
    }
    getAll(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = this.buildQueryStringFromParams(opts);
            const url = this.baseUrl + query;
            const response = yield this.shipstation.request({
                url,
                method: RequestMethod.GET,
            });
            return response.data;
        });
    }
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.productId) {
                throw new Error('Product ID is required');
            }
            const url = `${this.baseUrl}/${data.productId}`;
            const response = yield this.shipstation.request({
                url,
                method: RequestMethod.PUT,
                data,
            });
            return response.data;
        });
    }
}
