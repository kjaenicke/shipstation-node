import type { ICreateOrUpdateWarehouse, IUpdateOrDeleteWarehouseResponse, IWarehouse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Warehouses extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    get(warehouseId: number): Promise<IWarehouse>;
    listWarehouses(): Promise<Array<IWarehouse>>;
    create(data: ICreateOrUpdateWarehouse): Promise<IWarehouse>;
    update(id: number, data: ICreateOrUpdateWarehouse): Promise<IUpdateOrDeleteWarehouseResponse>;
    delete(id: number): Promise<IUpdateOrDeleteWarehouseResponse>;
}
