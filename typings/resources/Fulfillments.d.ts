import type { IFulfillment, IFulfillmentPaginationResult } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Fulfillments extends BaseResource<IFulfillment> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(params?: object): Promise<IFulfillmentPaginationResult>;
}
