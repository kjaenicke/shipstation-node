import type ShipStation from '../shipstation';

export abstract class BaseResource {
  constructor(
    protected shipstation: ShipStation,
    protected baseUrl: string
  ) {
    this.shipstation = shipstation;
    this.baseUrl = baseUrl;
  }
}
