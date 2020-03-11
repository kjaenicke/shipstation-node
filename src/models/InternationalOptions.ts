export type InternationalOptionsContentType =
  | 'merchandise'
  | 'documents'
  | 'gift'
  | 'returned_goods'
  | 'sample'

export interface ICustomsItem {
  customsItemId: number
  description: string
  quantity: number
  value: number
  harmonizedTariffCode: string
  countryOfOrigin: string
}

export interface IInternationalOptions {
  contents: InternationalOptionsContentType
  customsItems: ICustomsItem[]
  nonDelivery: string
}
