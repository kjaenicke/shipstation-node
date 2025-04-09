import type ShipStation from '../shipstation';
export declare abstract class BaseResource {
    protected shipstation: ShipStation;
    protected baseUrl: string;
    constructor(shipstation: ShipStation, baseUrl: string);
}
