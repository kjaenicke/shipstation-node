import type { IProduct, IProductPaginationResult, IProductUpdateResponse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Products extends BaseResource<IProduct> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(params?: object): Promise<IProductPaginationResult>;
    update(data: IProduct): Promise<IProductUpdateResponse>;
}
