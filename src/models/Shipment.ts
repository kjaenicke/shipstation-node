import { IAddress } from './Address'
import { IAdvancedOptions } from './AdvancedOptions'
import { IDimensions } from './Dimensions'
import { IInsuranceOptions } from './InsuranceOptions'
import { IWeight } from './Weight'

export interface IShipment {
  shipmentId: number
  orderId: number
  orderKey: string
  userId: string
  customerEmail: string
  orderNumber: string
  createDate: string
  shipDate: string
  shipmentCost: number
  insuranceCost: number
  trackingNumber: string
  isReturnLabel: boolean
  batchNumber: string | null
  carrierCode: string
  serviceCode: string
  packageCode: string
  confirmation: string
  warehouseId: number
  voided: boolean
  voidDate: string | null
  marketplaceNotified: boolean
  notifyErrorMessage: string | null
  shipTo: IAddress[]
  weight: IWeight[]
  dimensions: IDimensions | null
  insuranceOptions: IInsuranceOptions[]
  advancedOptions: IAdvancedOptions[]
  shipmentItems: any[] | null
  labelData: any | null
  formData: any | null
}
