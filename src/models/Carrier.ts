export interface ICarrier {
  name: string
  code: string
  accountNumber: string
  requiresFundedAccount: boolean
  balance: number
  nickname: string | null
  shippingProviderId: number
  primary: boolean
}
