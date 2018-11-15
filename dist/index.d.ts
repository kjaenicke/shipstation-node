import 'reflect-metadata';
import * as Models from './models';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
declare const _default: {
    carriers: Carriers;
    fulfillments: Fulfillments;
    orders: Orders;
    request: (url: string, method: RequestMethod, useBaseUrl?: boolean) => import("axios").AxiosPromise<any>;
};
export default _default;
export { Models };
