export type InternationalOptionsContentType =
  | 'merchandise'
  | 'documents'
  | 'gift'
  | 'returned_goods'
  | 'sample'

export interface ICustomsItem {
  customsItemId: string
  description: string
  quantity: number
  value: number
  harmonizedTariffCode: string
  countryOrOrigin: string
}

export interface IInternationalOptions {
  contents: InternationalOptionsContentType
  customsItems: ICustomsItem[]
  nonDelivery: string
}
