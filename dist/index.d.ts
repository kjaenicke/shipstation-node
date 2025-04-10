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
import { Accounts } from './resources/Accounts';
export default class ShipStationAPI {
    private readonly ss;
    accounts: Accounts;
    carriers: Carriers;
    fulfillments: Fulfillments;
    orders: Orders;
    products: Products;
    shipments: Shipments;
    stores: Stores;
    warehouses: Warehouses;
    webhooks: Webhooks;
    request: (args: ShipStationRequestOptions) => Promise<AxiosResponse>;
    constructor(options?: ShipStationOptions);
}
export type { ShipStationRequestOptions };
export * from './types';
