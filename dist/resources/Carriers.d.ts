import { ICarrier } from '../models';
import Shipstation from '../shipstation';
export declare class Carriers {
    private shipstation;
    private baseUrl;
    constructor(shipstation: Shipstation);
    get(carrierId: number): Promise<ICarrier>;
    getAll(): Promise<ICarrier[]>;
}
