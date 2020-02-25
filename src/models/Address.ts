export type AddressVerificationType =
  | 'Address not yet validated'
  | 'Address validated successfully'
  | 'Address validation warning'
  | 'Address validation failed'

export interface IAddress {
  name: string
  company?: string
  street1: string
  street2?: string
  street3?: string
  city: string
  state: string
  postalCode: string
  county?: string
  phone?: string
  residential?: boolean
  addressverified?: AddressVerificationType
}
