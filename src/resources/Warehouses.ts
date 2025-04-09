import type { ICreateOrUpdateWarehouse, IUpdateOrDeleteWarehouseResponse, IWarehouse } from '../models';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';

export class Warehouses extends BaseResource<IWarehouse> {
  constructor(protected override shipstation: Shipstation) {
    super(shipstation, 'warehouses');
  }

  public async getAll(): Promise<Array<IWarehouse>> {
    return this.shipstation.request<Array<IWarehouse>>({
      url: this.baseUrl,
      method: 'GET'
    });
  }

  public async create(data: ICreateOrUpdateWarehouse): Promise<IWarehouse> {
    return this.shipstation.request<IWarehouse>({
      url: `${this.baseUrl}/createwarehouse`,
      method: 'POST',
      data
    });
  }

  public async update(id: number, data: ICreateOrUpdateWarehouse): Promise<IUpdateOrDeleteWarehouseResponse> {
    return this.shipstation.request<IUpdateOrDeleteWarehouseResponse>({
      url: `${this.baseUrl}/${id}`,
      method: 'PUT',
      data
    });
  }

  public async delete(id: number): Promise<IUpdateOrDeleteWarehouseResponse> {
    return this.shipstation.request<IUpdateOrDeleteWarehouseResponse>({
      url: `${this.baseUrl}/${id}`,
      method: 'DELETE'
    });
  }
}
