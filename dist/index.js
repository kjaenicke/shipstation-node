import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';
import ShipStation from './shipstation';
import { Products } from './resources/Products';
import { Accounts } from './resources/Accounts';
import { Users } from './resources/Users';
export default class ShipStationAPI {
    constructor(options) {
        this.ss = new ShipStation(options);
        this.accounts = new Accounts(this.ss);
        this.orders = new Orders(this.ss);
        this.carriers = new Carriers(this.ss);
        this.fulfillments = new Fulfillments(this.ss);
        this.products = new Products(this.ss);
        this.stores = new Stores(this.ss);
        this.shipments = new Shipments(this.ss);
        this.warehouses = new Warehouses(this.ss);
        this.webhooks = new Webhooks(this.ss);
        this.users = new Users(this.ss);
        this.request = this.ss.request;
    }
}
export * from './types';
