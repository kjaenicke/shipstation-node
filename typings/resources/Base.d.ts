import type Shipstation from '../shipstation';
export declare abstract class BaseResource {
    protected shipstation: Shipstation;
    protected baseUrl: string;
    constructor(shipstation: Shipstation, baseUrl: string);
}
