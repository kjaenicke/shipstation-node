import type { IStore } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export interface IGetAllStoresOptions {
    showInactive?: boolean;
    marketplaceId?: number;
}
export declare class Stores extends BaseResource<IStore> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(params?: IGetAllStoresOptions): Promise<Array<IStore>>;
}
