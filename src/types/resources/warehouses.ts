import type { Address } from '../models/Address';

export interface CreateWarehouseOptions {
  /** Name of the Ship From Location. */
  warehouseName?: string;
  /**
   * The origin address.
   *
   * Shipping rates will be calculated from this address. Use the
   * [Address](https://www.shipstation.com/docs/api/models/address/) model.
   */
  originAddress: Address;
  /**
   * The return address.
   *
   * If a `returnAddress` is not specified, your `originAddress` will be used as your "returnAddress". Use the
   * [Address](https://www.shipstation.com/docs/api/models/address/) model.
   */
  returnAddress?: Address;
  /**
   * Specifies whether or not this will be your default Ship From Location.
   *
   * @default `false`
   */
  isDefault?: boolean;
}

export interface UpdateWarehouseOptions extends CreateWarehouseOptions {
  warehouseId?: number;
}

export type WarehouseResponseItem = Required<UpdateWarehouseOptions>;

export interface DeleteWarehouseResponse {
  success: boolean;
  message: string;
}

export type ListWarehousesResponse = Array<WarehouseResponseItem>;
