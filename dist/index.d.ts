import type { AxiosResponse } from 'axios';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';
import type { ShipStationRequestOptions, ShipStationOptions } from './shipstation';
import { Products } from './resources/Products';
export default class ShipStationAPI {
    private readonly ss;
    orders: Orders;
    carriers: Carriers;
    fulfillments: Fulfillments;
    products: Products;
    stores: Stores;
    shipments: Shipments;
    warehouses: Warehouses;
    webhooks: Webhooks;
    request: (args: ShipStationRequestOptions) => Promise<AxiosResponse>;
    constructor(options?: ShipStationOptions);
}
export type { ShipStationRequestOptions };
export * from './types';
