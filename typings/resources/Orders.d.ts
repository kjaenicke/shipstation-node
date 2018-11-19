import { ICreateOrUpdateOrder, ICreateOrUpdateOrderBulkResponse, IOrder, IOrderPaginationResult } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Orders extends BaseResource<IOrder> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(): Promise<IOrderPaginationResult>;
    createOrUpdate(data: ICreateOrUpdateOrder): Promise<IOrder>;
    createOrUpdateBulk(data: ICreateOrUpdateOrder[]): Promise<ICreateOrUpdateOrderBulkResponse>;
}
