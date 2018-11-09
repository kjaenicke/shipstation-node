export interface IInsuranceOptions {
  provider: 'shipsurance' | 'carrier'
  insureShipment: boolean
  insuredValue: number
}
