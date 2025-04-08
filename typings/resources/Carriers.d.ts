import type { ICarrier } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Carriers extends BaseResource<ICarrier> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(): Promise<Array<ICarrier>>;
}
