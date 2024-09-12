import { IAddress } from './Address';
export interface IWarehouse {
    warehouseId: number;
    warehouseName: string | null;
    createDate: string;
    isDefault: boolean;
    originAddress: IAddress;
    returnAddress: IAddress;
}
export interface ICreateOrUpdateWarehouse {
    warehouseName: string;
    originAddress: IAddress;
    returnAddress?: IAddress;
    isDefault?: boolean;
}
export interface IUpdateOrDeleteWarehouseResponse {
    success: boolean;
    message: string;
}
