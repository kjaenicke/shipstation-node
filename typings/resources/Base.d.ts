import type Shipstation from '../shipstation';
export declare abstract class BaseResource<T> {
    protected shipstation: Shipstation;
    protected baseUrl: string;
    constructor(shipstation: Shipstation, baseUrl: string);
    get(id: number): Promise<T>;
}
