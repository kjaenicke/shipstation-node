import { IShipment, IShippingRate, IShippingRateOptions } from '../models';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Shipments extends BaseResource<IShipment> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object): Promise<IShipment[]>;
    getRates(data?: IShippingRateOptions): Promise<IShippingRate[]>;
}
