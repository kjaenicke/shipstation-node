import type Shipstation from '../shipstation';

export abstract class BaseResource {
  constructor(
    protected shipstation: Shipstation,
    protected baseUrl: string
  ) {
    this.shipstation = shipstation;
    this.baseUrl = baseUrl;
  }
}
