import type { IShipment, IShippingRate, IShippingRateOptions } from '../models';
import type { ICreateLabelOptions } from '../models/CreateLabelOptions';
import type { IVoidLabel, IVoidLabelOptions } from '../models/VoidLabel';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Shipments extends BaseResource<IShipment> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'shipments');
  }

  public async getAll(params?: object): Promise<Array<IShipment>> {
    return this.shipstation.request<Array<IShipment>>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }

  public async getRates(data?: IShippingRateOptions): Promise<Array<IShippingRate>> {
    return this.shipstation.request<Array<IShippingRate>>({
      url: `${this.baseUrl}/getrates`,
      method: 'POST',
      data
    });
  }

  public async createLabel(data: ICreateLabelOptions): Promise<IShipment> {
    return this.shipstation.request<IShipment>({
      url: `${this.baseUrl}/createlabel`,
      method: 'POST',
      data
    });
  }

  public async voidLabel(data: IVoidLabelOptions): Promise<IVoidLabel> {
    return this.shipstation.request<IVoidLabel>({
      url: `${this.baseUrl}/voidlabel`,
      method: 'POST',
      data
    });
  }
}
