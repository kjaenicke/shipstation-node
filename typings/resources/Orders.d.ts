import type { ICreateOrUpdateOrder, ICreateOrUpdateOrderBulkResponse, IOrder, IOrderPaginationResult, ICreateLabel, ICreateLabelResponse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Orders extends BaseResource<IOrder> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(params?: object): Promise<IOrderPaginationResult>;
    createOrUpdate(data: ICreateOrUpdateOrder): Promise<IOrder>;
    createOrUpdateBulk(data: Array<ICreateOrUpdateOrder>): Promise<ICreateOrUpdateOrderBulkResponse>;
    createLabel(data: ICreateLabel): Promise<ICreateLabelResponse>;
}
