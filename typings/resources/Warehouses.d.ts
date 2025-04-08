import type { ICreateOrUpdateWarehouse, IUpdateOrDeleteWarehouseResponse, IWarehouse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Warehouses extends BaseResource<IWarehouse> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(): Promise<Array<IWarehouse>>;
    create(data: ICreateOrUpdateWarehouse): Promise<IWarehouse>;
    update(id: number, data: ICreateOrUpdateWarehouse): Promise<IUpdateOrDeleteWarehouseResponse>;
    delete(id: number): Promise<IUpdateOrDeleteWarehouseResponse>;
}
