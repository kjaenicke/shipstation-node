import { IAddress } from "./Address"
import { IAdvancedOptions } from "./AdvancedOptions"
import { IDimensions } from "./Dimensions"
import { IInsuranceOptions } from "./InsuranceOptions"
import { IInternationalOptions } from "./InternationalOptions"
import { IPaginatedResult } from "./Pagination"
import { IWeight } from "./Weight"

export type OrderStatus =
  | "awaiting_payment"
  | "awaiting_shipment"
  | "shipped"
  | "on_hold"
  | "cancelled"

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
  customerId: number
  customerUsername: string
  customerEmail: string
  billTo: IAddress
  shipTo: IAddress
  items: IOrderItem[]
  orderTotal: number
  amountPaid: number
  taxAmount: number
  shippingAmount: number
  customerNotes: string
  internalNotes: string
  gift: boolean
  giftMessage: string
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

export interface ICreateOrUpdateOrder {
  orderNumber: string
  orderKey?: string
  orderDate: string
  paymentDate?: string
  shipByDate?: string
  orderStatus: OrderStatus
  customerUsername?: string
  customerEmail?: string
  billTo: IAddress
  shipTo: IAddress
  items?: Array<Omit<IOrderItem, "orderItemId" | "createDate" | "modifyDate">>
  amountPaid?: number
  taxAmount?: number
  shippingAmount?: number
  customerNotes?: string
  internalNotes?: string
  gift?: boolean
  giftMessage?: string
  paymentMethod?: string
  requestedShippingService?: string
  carrierCode?: string
  serviceCode?: string
  packageCode?: string
  confirmation?: string
  shipDate?: string
  weight?: IWeight
  dimensions?: IDimensions
  insuranceOptions?: IInsuranceOptions
  internationalOptions?: IInternationalOptions
  advancedOptions?: IAdvancedOptions
  tagIds?: number[]
}

export interface IOrderItem {
  orderItemId: number
  lineItemKey: string
  sku: string
  name: string
  imageUrl?: string
  weight?: IWeight
  quantity: number
  unitPrice?: number
  taxAmount?: number
  shippingAmount?: number
  warehoustLocation?: string
  options?: IItemOption[]
  productId?: number
  fulfillmentSku?: string
  adjustment: boolean
  upc?: string
  createDate: string
  modifyDate: string
}

export interface IItemOption {
  name: string
  value: string
}

export interface IOrderPaginationResult extends IPaginatedResult {
  orders: IOrder[]
}

interface IBulkCreateOrUpdateOrderResponse {
  orderId: string
  orderNumber: string
  orderKey: string
  success: boolean
  errorMessage: string | null
}

export interface ICreateOrUpdateOrderBulkResponse {
  results: IBulkCreateOrUpdateOrderResponse[]
  hasErrors: boolean
}
