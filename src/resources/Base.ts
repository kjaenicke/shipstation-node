import type Shipstation from '../shipstation';

export abstract class BaseResource<T> {
  constructor(
    protected shipstation: Shipstation,
    protected baseUrl: string
  ) {
    this.shipstation = shipstation;
    this.baseUrl = baseUrl;
  }

  public async get(id: number): Promise<T> {
    return this.shipstation.request<T>({
      url: `${this.baseUrl}/${id}`,
      method: 'GET'
    });
  }
}
