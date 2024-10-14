import { IShipment, IShippingRate, IShippingRateOptions } from '../models';
import { ICreateLabelOptions } from '../models/CreateLabelOptions';
import { IVoidLabel, IVoidLabelOptions } from '../models/VoidLabel';
import Shipstation from '../shipstation';
import { BaseResource } from './Base';
export declare class Shipments extends BaseResource<IShipment> {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    getAll(opts?: object): Promise<IShipment[]>;
    getRates(data?: IShippingRateOptions): Promise<IShippingRate[]>;
    createLabel(data: ICreateLabelOptions): Promise<IShipment>;
    voidLabel(data: IVoidLabelOptions): Promise<IVoidLabel>;
}
