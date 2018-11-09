import { IOrder, IOrderPaginationResult } from '../models';
import Shipstation from '../shipstation';
export declare class Orders {
    private shipstation;
    private baseUrl;
    constructor(shipstation: Shipstation);
    get(orderId: number): Promise<IOrder>;
    getAll(): Promise<IOrderPaginationResult>;
}
