import { IFulfillment, IFulfillmentPaginationResult } from '../models';
import Shipstation from '../shipstation';
export declare class Fulfillments {
    private shipstation;
    private baseUrl;
    constructor(shipstation: Shipstation);
    get(carrierId: number): Promise<IFulfillment>;
    getAll(): Promise<IFulfillmentPaginationResult>;
}
