import type {
  ICreateOrUpdateOrder,
  ICreateOrUpdateMultipleOrdersResponse,
  IOrder,
  IOrderPaginationResult,
  ICreateLabel,
  ICreateLabelResponse
} from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Orders extends BaseResource {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'orders');
  }

  public async get(orderId: number): Promise<IOrder> {
    return this.shipstation.request<IOrder>({
      url: `${this.baseUrl}/${orderId}`,
      method: 'GET'
    });
  }

  public async list(params?: object): Promise<IOrderPaginationResult> {
    return this.shipstation.request<IOrderPaginationResult>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }

  public async createOrUpdate(data: ICreateOrUpdateOrder): Promise<IOrder> {
    return this.shipstation.request<IOrder>({
      url: `${this.baseUrl}/createorder`,
      method: 'POST',
      data
    });
  }

  public async createOrUpdateMultiple(
    data: Array<ICreateOrUpdateOrder>
  ): Promise<ICreateOrUpdateMultipleOrdersResponse> {
    return this.shipstation.request<ICreateOrUpdateMultipleOrdersResponse>({
      url: `${this.baseUrl}/createorders`,
      method: 'POST',
      data
    });
  }

  public async createLabel(data: ICreateLabel): Promise<ICreateLabelResponse> {
    return this.shipstation.request<ICreateLabelResponse>({
      url: `${this.baseUrl}/createlabelfororder`,
      method: 'POST',
      data
    });
  }
}
