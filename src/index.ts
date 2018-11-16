import 'reflect-metadata'

import * as Models from './models'
import { Carriers } from './resources/Carriers'
import { Fulfillments } from './resources/Fulfillments'
import { Orders } from './resources/Orders'
import { Stores } from './resources/Stores'
import Shipstation from './shipstation'

const shipstation = () => {
  const ss = new Shipstation()

  const orders = new Orders(ss)
  const carriers = new Carriers(ss)
  const fulfillments = new Fulfillments(ss)
  const stores = new Stores(ss)

  return {
    carriers,
    fulfillments,
    orders,
    stores,
    request: ss.request
  }
}

export default shipstation()
export { Models }
