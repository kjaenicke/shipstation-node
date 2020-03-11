export type Unit = 'pounds' | 'ounces' | 'grams'

export interface IWeight {
  value: number
  units: Unit
  WeightUnits: number
}
