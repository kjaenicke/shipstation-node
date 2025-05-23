import type { IAddress } from './Address';
import type { IAdvancedOptions } from './AdvancedOptions';
import type { IDimensions } from './Dimensions';
import type { IInsuranceOptions } from './InsuranceOptions';
import type { IInternationalOptions } from './InternationalOptions';
import type { IPaginatedResult } from './Pagination';
import type { IWeight } from './Weight';
export type OrderStatus = 'awaiting_payment' | 'awaiting_shipment' | 'shipped' | 'on_hold' | 'cancelled';
export interface IOrder {
    orderId: number;
    orderNumber: string;
    orderKey: string;
    orderDate: string;
    createDate: string;
    modifyDate: string;
    paymentDate: string;
    shipByDate: string;
    orderStatus: OrderStatus;
    customerId: number;
    customerUsername: string;
    customerEmail: string;
    billTo: IAddress;
    shipTo: IAddress;
    items: Array<IOrderItem>;
    orderTotal: number;
    amountPaid: number;
    taxAmount: number;
    shippingAmount: number;
    customerNotes: string;
    internalNotes: string;
    gift: boolean;
    giftMessage: string;
    paymentMethod: string;
    requestedShippingService: string;
    carrierCode: string;
    serviceCode: string;
    packageCode: string;
    confirmation: string;
    shipDate: string;
    holdUntilDate: string;
    weight: IWeight;
    dimensions: IDimensions;
    insuranceOptions: IInsuranceOptions;
    internationalOptions: IInternationalOptions;
    advancedOptions: IAdvancedOptions;
    tagIds?: Array<number>;
    userId?: string;
    externallyFulfilled: boolean;
    externallyFulfilledBy: string;
    labelMessages?: string;
}
export interface ICreateOrUpdateOrder {
    orderNumber: string;
    orderKey?: string;
    orderDate: string;
    paymentDate?: string;
    shipByDate?: string;
    orderStatus: OrderStatus;
    customerUsername?: string;
    customerEmail?: string;
    billTo: IAddress;
    shipTo: IAddress;
    items?: Array<Omit<IOrderItem, 'orderItemId' | 'createDate' | 'modifyDate'>>;
    amountPaid?: number;
    taxAmount?: number;
    shippingAmount?: number;
    customerNotes?: string;
    internalNotes?: string;
    gift?: boolean;
    giftMessage?: string;
    paymentMethod?: string;
    requestedShippingService?: string;
    carrierCode?: string;
    serviceCode?: string;
    packageCode?: string;
    confirmation?: string;
    shipDate?: string;
    weight?: IWeight;
    dimensions?: IDimensions;
    insuranceOptions?: IInsuranceOptions;
    internationalOptions?: IInternationalOptions;
    advancedOptions?: IAdvancedOptions;
    tagIds?: Array<number>;
}
export interface IOrderItem {
    orderItemId: number;
    lineItemKey: string;
    sku: string;
    name: string;
    imageUrl?: string;
    weight?: IWeight;
    quantity: number;
    unitPrice?: number;
    taxAmount?: number;
    shippingAmount?: number;
    warehouseLocation?: string;
    options?: Array<IItemOption>;
    productId?: number;
    fulfillmentSku?: string;
    adjustment: boolean;
    upc?: string;
    createDate: string;
    modifyDate: string;
}
export interface ICreateLabel {
    orderId: number;
    carrierCode?: string;
    serviceCode?: string;
    confirmation?: string;
    shipDate: string;
    weight?: IWeight;
    dimensions?: IDimensions;
    insuranceOptions?: IInsuranceOptions;
    internationalOptions?: IInternationalOptions;
    advancedOptions?: IAdvancedOptions;
    testLabel: boolean;
}
export interface IItemOption {
    name: string;
    value: string;
}
export interface IOrderPaginationResult extends IPaginatedResult {
    orders: Array<IOrder>;
}
interface IBulkCreateOrUpdateOrderResponse {
    orderId: string;
    orderNumber: string;
    orderKey: string;
    success: boolean;
    errorMessage: string | null;
}
export interface ICreateOrUpdateMultipleOrdersResponse {
    results: Array<IBulkCreateOrUpdateOrderResponse>;
    hasErrors: boolean;
}
export interface ICreateLabelResponse {
    shipmentId: number;
    shipmentCost: number;
    insuranceCost: number;
    trackingNumber: string;
    labelData: string;
    formData?: string;
}
export {};
