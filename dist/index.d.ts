import 'reflect-metadata';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
declare const shipstation: () => {
    carriers: Carriers;
    fulfillments: Fulfillments;
    orders: Orders;
};
export default shipstation;
