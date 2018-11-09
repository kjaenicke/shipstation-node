import 'reflect-metadata'
import Container from 'typedi'

import { Carriers } from './resources/Carriers'
import { Fulfillments } from './resources/Fulfillments'
import { Orders } from './resources/Orders'

const shipstation = () => {
  const orders = Container.get(Orders)
  const carriers = Container.get(Carriers)
  const fulfillments = Container.get(Fulfillments)

  return {
    carriers,
    fulfillments,
    orders
  }
}

export default shipstation()
