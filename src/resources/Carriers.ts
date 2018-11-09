import { Service } from 'typedi'
import { ICarrier } from '../models'
import Shipstation, { RequestMethod } from '../shipstation'

@Service()
export class Carriers {
  private baseUrl: string = 'carriers'

  constructor(private shipstation: Shipstation) {}

  public async get(carrierId: number): Promise<ICarrier> {
    const url = `${this.baseUrl}/${carrierId}`
    const response = await this.shipstation.request(url, RequestMethod.GET)
    return response.data() as ICarrier
  }

  public async getAll(): Promise<ICarrier[]> {
    const url = this.baseUrl
    const response = await this.shipstation.request(url, RequestMethod.GET)
    return response.data as ICarrier[]
  }
}
