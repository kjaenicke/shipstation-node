import type { ICreateOrUpdateOrder, ICreateOrUpdateMultipleOrdersResponse, IOrder, IOrderPaginationResult, ICreateLabel, ICreateLabelResponse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Orders extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    get(orderId: number): Promise<IOrder>;
    list(params?: object): Promise<IOrderPaginationResult>;
    createOrUpdate(data: ICreateOrUpdateOrder): Promise<IOrder>;
    createOrUpdateMultiple(data: Array<ICreateOrUpdateOrder>): Promise<ICreateOrUpdateMultipleOrdersResponse>;
    createLabel(data: ICreateLabel): Promise<ICreateLabelResponse>;
}
