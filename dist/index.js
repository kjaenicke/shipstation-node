import * as Models from './models';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';
import Shipstation from './shipstation';
import { Products } from './resources/Products';
export default class ShipStationAPI {
    constructor(options) {
        this.ss = new Shipstation(options);
        this.orders = new Orders(this.ss);
        this.carriers = new Carriers(this.ss);
        this.fulfillments = new Fulfillments(this.ss);
        this.products = new Products(this.ss);
        this.stores = new Stores(this.ss);
        this.shipments = new Shipments(this.ss);
        this.warehouses = new Warehouses(this.ss);
        this.webhooks = new Webhooks(this.ss);
        this.request = this.ss.request;
    }
}
export { Models };
