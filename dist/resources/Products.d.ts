import type { IProduct, IProductPaginationResult, IProductUpdateResponse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Products extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    get(productId: number): Promise<IProduct>;
    list(params?: object): Promise<IProductPaginationResult>;
    update(data: IProduct): Promise<IProductUpdateResponse>;
}
