import type { AxiosResponse } from 'axios';

import * as Models from './models';
import { Carriers } from './resources/Carriers';
import { Fulfillments } from './resources/Fulfillments';
import { Orders } from './resources/Orders';
import { Shipments } from './resources/Shipments';
import { Stores } from './resources/Stores';
import { Warehouses } from './resources/Warehouses';
import { Webhooks } from './resources/Webhooks';
import type { IShipstationRequestOptions, IShipstationOptions } from './shipstation';
import Shipstation from './shipstation';
import { Products } from './resources/Products';

export default class ShipStationAPI {
  private readonly ss: Shipstation;

  public orders: Orders;
  public carriers: Carriers;
  public fulfillments: Fulfillments;
  public products: Products;
  public stores: Stores;
  public shipments: Shipments;
  public warehouses: Warehouses;
  public webhooks: Webhooks;
  public request: (args: IShipstationRequestOptions) => Promise<AxiosResponse>;

  constructor(options?: IShipstationOptions) {
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

export type { IShipstationRequestOptions };
export { Models };
