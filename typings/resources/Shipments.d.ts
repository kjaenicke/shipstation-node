import type { IShipment, IShippingRate, IShippingRateOptions } from '../models';
import type { ICreateLabelOptions } from '../models/CreateLabelOptions';
import type { IVoidLabel, IVoidLabelOptions } from '../models/VoidLabel';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Shipments extends BaseResource<IShipment> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(params?: object): Promise<Array<IShipment>>;
    getRates(data?: IShippingRateOptions): Promise<Array<IShippingRate>>;
    createLabel(data: ICreateLabelOptions): Promise<IShipment>;
    voidLabel(data: IVoidLabelOptions): Promise<IVoidLabel>;
}
