import type { IStore } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export interface IGetAllStoresOptions {
    showInactive?: boolean;
    marketplaceId?: number;
}
export declare class Stores extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    get(storeId: number): Promise<IStore>;
    list(params?: IGetAllStoresOptions): Promise<Array<IStore>>;
}
