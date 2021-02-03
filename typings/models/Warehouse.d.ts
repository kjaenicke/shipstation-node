import { IAddress } from "./Address";

export interface IWarehouse {
    warehouseId: number;
    warehouseName: string | null;
    createDate: string;
    isDefault: boolean;
    originAddress: IAddress;
    returnAddress: IAddress;
}
