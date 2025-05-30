import type { IAddress } from './Address';
import type { IAdvancedOptions } from './AdvancedOptions';
import type { IDimensions } from './Dimensions';
import type { IInsuranceOptions } from './InsuranceOptions';
import type { IWeight } from './Weight';
export interface IShipment {
    shipmentId: number;
    orderId: number;
    orderKey: string;
    userId: string;
    customerEmail: string;
    orderNumber: string;
    createDate: string;
    shipDate: string;
    shipmentCost: number;
    insuranceCost: number;
    trackingNumber: string;
    isReturnLabel: boolean;
    batchNumber: string | null;
    carrierCode: string;
    serviceCode: string;
    packageCode: string;
    confirmation: string;
    warehouseId: number;
    voided: boolean;
    voidDate: string | null;
    marketplaceNotified: boolean;
    notifyErrorMessage: string | null;
    shipTo: Array<IAddress>;
    weight: Array<IWeight>;
    dimensions: IDimensions | null;
    insuranceOptions: Array<IInsuranceOptions>;
    advancedOptions: Array<IAdvancedOptions>;
    shipmentItems: Array<any> | null;
    labelData: any;
    formData: any;
}
