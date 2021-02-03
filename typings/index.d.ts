import { AxiosResponse } from 'axios';
import * as Models from './models';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';
import { IShipstationRequestOptions, RequestMethod } from './shipstation';
export default class ShipStationAPI {
    private ss;
    orders: Orders;
    carriers: Carriers;
    fulfillments: Fulfillments;
    stores: Stores;
    shipments: Shipments;
    warehouses: Warehouses;
    webhooks: Webhooks;
    request: (args: IShipstationRequestOptions) => Promise<AxiosResponse<any>>;
    constructor();
}
export { Models, IShipstationRequestOptions, RequestMethod };
