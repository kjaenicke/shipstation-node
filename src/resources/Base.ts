import type Shipstation from '../shipstation';
import { RequestMethod } from '../shipstation';

export class BaseResource<T> {
  constructor(
    protected shipstation: Shipstation,
    protected baseUrl: string
  ) {
    this.shipstation = shipstation;
    this.baseUrl = baseUrl;
  }

  public async get(id: number): Promise<T> {
    const url = `${this.baseUrl}/${id}`;
    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    });
    return response.data as T;
  }

  protected buildQueryStringFromParams(params?: object) {
    let qs = '';

    if (typeof params !== 'undefined') {
      Object.entries(params).forEach(([key, value], index) => {
        const qsStart = index === 0 ? '?' : '&';
        qs += `${qsStart}${key}=${value}`;
      });
    }

    return qs;
  }
}
