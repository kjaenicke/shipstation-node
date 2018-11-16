import Shipstation, { RequestMethod } from '../shipstation'

export class BaseResource<T> {
  constructor(protected shipstation: Shipstation, protected baseUrl: string) {
    this.shipstation = shipstation
    this.baseUrl = baseUrl
  }

  public async get(id: number): Promise<T> {
    const url = `${this.baseUrl}/${id}`
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    })
    return response.data as T
  }
}
