import { IAddress } from './Address'
import { IAdvancedOptions } from './AdvancedOptions'
import { IDimensions } from './Dimensions'
import { IInsuranceOptions } from './InsuranceOptions'
import { IInternationalOptions } from './InternationOptions'
import { IPaginatedResult } from './Pagination'
import { IWeight } from './Weight'

export type OrderStatus =
  | 'awaiting_payment'
  | 'awaiting_shipment'
  | 'shipped'
  | 'on_hold'
  | 'cancelled'

export interface IOrder {
  orderId: number
  orderNumber: string
  orderKey: string
  orderDate: string
  createDate: string
  modifyDate: string
  paymentDate: string
  shipByDate: string
  orderStatus: OrderStatus
  customerId: string
  customerUsername: string
  customerEmail: string
  billTo: IAddress
  shipTo: IAddress
  orderTotal: number
  amountPaid: number
  taxAmount: number
  shippingAmount: number
  customerNotes: string
  internalNotes: string
  gift: boolean
  paymentMethod: string
  requestedShippingService: string
  carrierCode: string
  serviceCode: string
  packageCode: string
  confirmation: string
  shipDate: string
  holdUntilDate: string
  weight: IWeight
  dimensions: IDimensions
  insuranceOptions: IInsuranceOptions
  internationalOptions: IInternationalOptions
  advancedOptions: IAdvancedOptions
  tagIds: number[]
  userId: string
  externallyFulfilled: boolean
  externallyFulfilledBy: string
}

export interface IOrderPaginationResult extends IPaginatedResult {
  orders: IOrder[]
}