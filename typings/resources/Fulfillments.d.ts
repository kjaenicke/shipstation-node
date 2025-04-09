import type { IFulfillmentPaginationResult } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Fulfillments extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    list(params?: object): Promise<IFulfillmentPaginationResult>;
}
