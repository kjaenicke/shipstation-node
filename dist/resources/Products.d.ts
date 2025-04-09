import type ShipStation from '../shipstation';
import type { GetProductResponse, ListProductsOptions, ListProductsResponse, Product, UpdateProductResponse } from '../types';
import { BaseResource } from './Base';
export declare class Products extends BaseResource {
    protected shipstation: ShipStation;
    constructor(shipstation: ShipStation);
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
    get(productId: number): Promise<GetProductResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/products/list/)
     *
     * Obtains a list of products that match the specified criteria.
     *
     * @param params The parameters for the request.
     *
     * @returns The list of products.
     */
    list(params?: ListProductsOptions): Promise<ListProductsResponse>;
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
    update(data: Product): Promise<UpdateProductResponse>;
}
