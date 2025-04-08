import type { IProduct, IProductPaginationResult, IProductUpdateResponse } from '../models';
import type Shipstation from '../shipstation';
import { RequestMethod } from '../shipstation';
import { BaseResource } from './Base';

export class Products extends BaseResource<IProduct> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'products');
  }

  /**
   * Get all products currently available in ShipStation
   * @param {object} opts - Query parameters
   * @returns {Promise<IProductPaginationResult>}
   * @see https://www.shipstation.com/docs/api/products/list/
   */
  public async getAll(opts?: object): Promise<IProductPaginationResult> {
    const query = this.buildQueryStringFromParams(opts);
    const url = this.baseUrl + query;

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    });
    return response.data as IProductPaginationResult;
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

    const url = `${this.baseUrl}/${data.productId}`;
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.PUT,
      data
    });

    return response.data as IProductUpdateResponse;
  }
}
