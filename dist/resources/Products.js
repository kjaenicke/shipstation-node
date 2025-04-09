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
export class Products extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'products');
        this.shipstation = shipstation;
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/products/get-product/)
     *
     * Requirements:
     * - You'll need a `productId` to make this API call.
     * - Find a list of products for this account (`productId`) by a
     * [List Products call](https://www.shipstation.com/docs/api/products/list/).
     *
     * @param productId The system-generated identifier for the Product.
     *
     * @returns The product.
     */
    get(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/${productId}`,
                method: 'GET'
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/products/list/)
     *
     * Obtains a list of products that match the specified criteria.
     *
     * @param params The parameters for the request.
     *
     * @returns The list of products.
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
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/products/update/)
     *
     * Updates an existing product. This call does not currently support partial updates. The entire resource must be
     * provided in the body of the request.
     *
     * Requirements:
     * - You'll need a `productId` to make this API call.
     * - Find a list of products for this account (`productId`) by a
     * [List Products call](https://www.shipstation.com/docs/api/products/list/).
     *
     * @param data The product data.
     *
     * @returns The status of the update operation.
     */
    update(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/${data.productId}`,
                method: 'PUT',
                data
            });
        });
    }
}
