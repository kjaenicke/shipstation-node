import 'reflect-metadata';
import * as Models from './models';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Webhooks } from './resources/Webhooks';
declare const _default: {
    carriers: Carriers;
    fulfillments: Fulfillments;
    orders: Orders;
    stores: Stores;
    shipments: Shipments;
    webhooks: Webhooks;
    request: ({ url, method, useBaseUrl, data }: import("./shipstation").IShipstationRequestOptions) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
export { Models };
