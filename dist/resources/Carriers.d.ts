import type { ICarrier } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Carriers extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    get(carrierCode: string): Promise<ICarrier>;
    list(): Promise<Array<ICarrier>>;
}
