import { IWarehouse } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Warehouses extends BaseResource<IWarehouse> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object): Promise<IWarehouse[]>;
}
