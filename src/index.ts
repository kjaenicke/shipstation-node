import 'reflect-metadata'

import * as Models from './models'
import { Carriers } from './resources/Carriers'
import { Fulfillments } from './resources/Fulfillments'
import { Orders } from './resources/Orders'
import Shipstation from './shipstation'

const shipstation = () => {
  const ss = new Shipstation()

  const orders = new Orders(ss)
  const carriers = new Carriers(ss)
  const fulfillments = new Fulfillments(ss)

  return {
    carriers,
    fulfillments,
    orders,
    request: ss.request
  }
}

export default shipstation()
export { Models }
