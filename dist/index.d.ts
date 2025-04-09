import type { AxiosResponse } from 'axios';
import * as Models from './types';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';
import type { ShipstationRequestOptions, ShipstationOptions } from './shipstation';
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
    request: (args: ShipstationRequestOptions) => Promise<AxiosResponse>;
    constructor(options?: ShipstationOptions);
}
export type { ShipstationRequestOptions };
export { Models };
