import 'reflect-metadata';
import * as Models from './models';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
declare const _default: {
    carriers: Carriers;
    fulfillments: Fulfillments;
    orders: Orders;
    stores: Stores;
    shipments: Shipments;
    request: ({ url, method, useBaseUrl, data }: import("./shipstation").IShipstationRequestOptions) => import("axios").AxiosPromise<any>;
};
export default _default;
export { Models };
