import type { IProduct, IProductPaginationResult, IProductUpdateResponse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Products extends BaseResource<IProduct> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'products');
  }

  /**
   * Get all products currently available in ShipStation
   * @param {object} params - Query parameters
   * @returns {Promise<IProductPaginationResult>}
   * @see https://www.shipstation.com/docs/api/products/list/
   */
  public async getAll(params?: object): Promise<IProductPaginationResult> {
    return this.shipstation.request<IProductPaginationResult>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }

  /**
   * Create or update a product
   * @param {IProduct} data - Product data
   * @returns {Promise<IProductUpdateResponse>}
   * @see https://www.shipstation.com/docs/api/products/update/
   */
  public async update(data: IProduct): Promise<IProductUpdateResponse> {
    if (!data.productId) {
      throw new Error('Product ID is required');
    }

    return this.shipstation.request<IProductUpdateResponse>({
      url: `${this.baseUrl}/${data.productId}`,
      method: 'PUT',
      data
    });
  }
}
