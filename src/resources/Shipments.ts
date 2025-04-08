import type { IShipment, IShippingRate, IShippingRateOptions } from '../models';
import type { ICreateLabelOptions } from '../models/CreateLabelOptions';
import type { IVoidLabel, IVoidLabelOptions } from '../models/VoidLabel';
import type Shipstation from '../shipstation';
import { RequestMethod } from '../shipstation';
import { BaseResource } from './Base';

export class Shipments extends BaseResource<IShipment> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'shipments');
  }

  public async getAll(opts?: object): Promise<Array<IShipment>> {
    const query = this.buildQueryStringFromParams(opts);
    const url = this.baseUrl + query;

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.GET
    });
    return response.data as Array<IShipment>;
  }

  public async getRates(data?: IShippingRateOptions): Promise<Array<IShippingRate>> {
    const url = this.baseUrl + '/getrates';

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    });
    return response.data as Array<IShippingRate>;
  }

  public async createLabel(data: ICreateLabelOptions): Promise<IShipment> {
    const url = this.baseUrl + '/createlabel';

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    });
    return response.data as IShipment;
  }

  public async voidLabel(data: IVoidLabelOptions): Promise<IVoidLabel> {
    const url = this.baseUrl + '/voidlabel';

    const response = await this.shipstation.request({
      url,
      method: RequestMethod.POST,
      data
    });
    return response.data as IVoidLabel;
  }
}
