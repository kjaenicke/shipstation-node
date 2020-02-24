import { AxiosResponse } from 'axios'

import * as Models from './models'
import { Carriers } from './resources/Carriers'
import { Fulfillments } from './resources/Fulfillments'
import { Orders } from './resources/Orders'
import { Shipments } from './resources/Shipments'
import { Stores } from './resources/Stores'
import { Webhooks } from './resources/Webhooks'
import Shipstation, { IShipstationRequestOptions } from './shipstation'

export default class ShipStationAPI {
  private ss: Shipstation

  public orders: Orders
  public carriers: Carriers
  public fulfillments: Fulfillments
  public stores: Stores
  public shipments: Shipments
  public webhooks: Webhooks
  public request: (
    args: IShipstationRequestOptions
  ) => Promise<AxiosResponse<any>>

  constructor() {
    this.ss = new Shipstation()

    this.orders = new Orders(this.ss)
    this.carriers = new Carriers(this.ss)
    this.fulfillments = new Fulfillments(this.ss)
    this.stores = new Stores(this.ss)
    this.shipments = new Shipments(this.ss)
    this.webhooks = new Webhooks(this.ss)
    this.request = this.ss.request
  }
}

export { Models }
