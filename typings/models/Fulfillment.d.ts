import type { IAddress } from './Address';
import type { IPaginatedResult } from './Pagination';
export interface IFulfillment {
    fulfillmentId: number;
    orderId: number;
    orderNumber: string;
    userId: string;
    customerEmail: string;
    trackingNumber: string;
    createDate: string;
    shipDate: string;
    voidDate: string | null;
    deliveryDate: string | null;
    carrierCode: string;
    fulfillmentServiceCode: string | null;
    fulfillmentProviderCode: string | null;
    fulfillmentFee: number;
    voidRequested: boolean;
    voided: boolean;
    marketplaceNotified: boolean;
    notifyErrorMessage: string | null;
    shipTo: IAddress;
}
export interface IFulfillmentPaginationResult extends IPaginatedResult {
    fulfillments: Array<IFulfillment>;
}
