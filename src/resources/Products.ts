import type ShipStation from '../shipstation';
import type {
  GetProductResponse,
  ListProductsOptions,
  ListProductsResponse,
  Product,
  UpdateProductResponse
} from '../types';
import { BaseResource } from './Base';

export class Products extends BaseResource {
  constructor(protected override shipstation: ShipStation) {
    super(shipstation, 'products');
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
  public async get(productId: number): Promise<GetProductResponse> {
    return this.shipstation.request<GetProductResponse>({
      url: `${this.baseUrl}/${productId}`,
      method: 'GET'
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
  public async list(params?: ListProductsOptions): Promise<ListProductsResponse> {
    return this.shipstation.request<ListProductsResponse>({
      url: this.baseUrl,
      method: 'GET',
      params
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
  public async update(data: Product): Promise<UpdateProductResponse> {
    return this.shipstation.request<UpdateProductResponse>({
      url: `${this.baseUrl}/${data.productId}`,
      method: 'PUT',
      data
    });
  }
}
