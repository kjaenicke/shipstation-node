import { IStore } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export interface IGetAllStoresOptions {
    showInactive?: boolean;
    marketplaceId?: number;
}
export declare class Stores extends BaseResource<IStore> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: IGetAllStoresOptions): Promise<IStore[]>;
}
