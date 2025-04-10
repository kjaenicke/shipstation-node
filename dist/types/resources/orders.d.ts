import type { DeliveryConfirmation, Order, OrderStatus } from '../models';
import type { PaginatedRequest, PaginatedResponse } from './pagination';
import type { Address } from '../models/Address';
import type { AdvancedOptions } from '../models/AdvancedOptions';
import type { Dimensions } from '../models/Dimensions';
import type { InsuranceOptions } from '../models/InsuranceOptions';
import type { InternationalOptions } from '../models/InternationalOptions';
import type { OrderItem } from '../models/OrderItem';
import type { Weight } from '../models/Weight';
export interface OrderResponseItem extends Order {
    externallyFulfilledById: number | null;
    externallyFulfilledByName: string | null;
}
export interface ListOrdersOptions extends PaginatedRequest {
    /** Returns orders that match the specified name. */
    customerName?: string;
    /**
     * Returns orders that contain items that match the specified keyword.
     *
     * Fields searched are `Sku`, `Description`, and `Options`.
     */
    itemKeyword?: string;
    /** Returns orders that were created in ShipStation after the specified date. */
    createDateStart?: string;
    /** Returns orders that were created in ShipStation before the specified date. */
    createDateEnd?: string;
    /** The default [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm) for
     * the Product. */
    customsCountryCode?: string;
    /** Returns orders that were modified after the specified date. */
    modifyDateStart?: string;
    /** Returns orders that were modified before the specified date. */
    modifyDateEnd?: string;
    /** Returns orders greater than the specified date. */
    orderDateStart?: string;
    /** Returns orders less than or equal to the specified date. */
    orderDateEnd?: string;
    /** Filter by order number, performs a "starts with" search. */
    orderNumber?: string;
    /**
     * Filter by order status. If left empty, orders of all statuses are returned.
     */
    orderStatus?: OrderStatus;
    /** Returns orders that were paid after the specified date. */
    paymentDateStart?: string;
    /** Returns orders that were paid before the specified date. */
    paymentDateEnd?: string;
    /**
     * Filters orders to a single, identified store.
     *
     * Call [List Stores](https://www.shipstation.com/docs/api/stores/list/) to obtain a list of `storeId`s.
     */
    storeId?: number;
    /**
     * Sort the responses by a set value.
     *
     * The response will be sorted based off the ascending dates (oldest to most current.) If left empty, the response
     * will be sorted by ascending `orderId`.
     */
    sortBy?: 'OrderDate' | 'ModifyDate' | 'CreateDate';
}
export interface ListOrdersResponse extends PaginatedResponse {
    orders: Array<OrderResponseItem>;
}
export interface ListOrdersByTagOptions extends Omit<PaginatedRequest, 'sortDir'> {
    /** The order's status. */
    orderStatus: OrderStatus;
    /**
     * The ID of the tag.
     *
     * Call [Accounts - ListTags](https://www.shipstation.com/docs/api/accounts/list-tags/) to obtain a list of tags for
     * this account.
     */
    tagId: number;
}
export interface CreateOrUpdateOrderOptions {
    /**
     * A unique ID assigned with the order by ShipStation API V1. This value will be returned in the response whenever you
     * create a new order.
     *
     * Notes about using this property:
     * - Do not include this property when creating a new order.
     * - Including the orderID property when updating the order will help prevent duplicate order records.
     * - When updating split orders, you must always include this property.
     */
    orderId?: number;
    /**
     * A user-defined order number used to identify an order (max 50 characters).
     */
    orderNumber: string;
    /**
     * A user-provided key that should be unique to each order.
     *
     * If an `orderKey` is not provided, ShipStation will create a new order and generate a unique `orderKey` for that
     * order.
     *
     * If the `orderKey` is provided, the createorder method will either:
     * - Create a new order if the provided `orderKey` is not found, or
     * - Update the existing order if the `orderKey` is found.
     *
     * NOTE: This property is always required when updating a split order.
     */
    orderKey?: string;
    /** The date the order was placed. */
    orderDate: string;
    /** The date the order was paid for. */
    paymentDate?: string;
    /** The date the order is to be shipped before or on. */
    shipByDate?: string;
    /** The order's status. */
    orderStatus: OrderStatus;
    /**
     * The customer's username.
     *
     * NOTE: This property needs to be defined to generate a customer profile.
     */
    customerUsername?: string;
    /** The customer's email address. */
    customerEmail?: string;
    /**
     * The recipient's billing address.
     *
     * Use the [Address model](https://www.shipstation.com/docs/api/models/address/).
     */
    billTo: Address;
    /**
     * The recipient's shipping address.
     *
     * Use the [Address model](https://www.shipstation.com/docs/api/models/address/).
     */
    shipTo: Address;
    /** Use an array of [OrderItem](https://www.shipstation.com/docs/api/models/order-item/) models. */
    items?: Array<Omit<OrderItem, 'orderItemId' | 'createDate' | 'modifyDate'>>;
    /** The total amount paid for the Order. */
    amountPaid?: number;
    /** The total tax amount for the Order. */
    taxAmount?: number;
    /** Shipping amount paid by the customer, if any. */
    shippingAmount?: number;
    /** Notes left by the customer when placing the order. */
    customerNotes?: string;
    /** Private notes that are only visible to the seller. */
    internalNotes?: string;
    /** Specifies whether or not this Order is a gift. */
    gift?: boolean;
    /** Gift message left by the customer when placing the order. */
    giftMessage?: string;
    /** Method of payment used by the customer. */
    paymentMethod?: string;
    /**
     * Identifies the shipping service the customer selected when placing this order.
     *
     * This value is given to ShipStation by the marketplace/cart and helps to identify what shipping service the customer
     * selected upon checkout.
     */
    requestedShippingService?: string;
    /** The code for the carrier that is to be used (or was used) when this order is shipped (was shipped). */
    carrierCode?: string;
    /** The code for the shipping service that is to be used (or was used) when this order is shipped (was shipped). */
    serviceCode?: string;
    /** The code for the package type that is to be used (or was used) when this order is shipped (was shipped). */
    packageCode?: string;
    /**
     * The type of delivery confirmation that is to be used (or was used) when this order is shipped (was shipped).
     *
     * Note: `direct_signature` is available for FedEx only.
     */
    confirmation?: DeliveryConfirmation;
    /** The date the order was shipped. */
    shipDate?: string;
    /**
     * Weight of the order.
     *
     * Use the [Weight](https://www.shipstation.com/docs/api/models/weight/) model.
     */
    weight?: Weight;
    /**
     * Dimensions of the order.
     *
     * Use the [Dimensions](https://www.shipstation.com/docs/api/models/dimensions/) model.
     */
    dimensions?: Dimensions;
    /**
     * The shipping insurance information associated with this order.
     *
     * Use the [InsuranceOptions](https://www.shipstation.com/docs/api/models/insurance-options/) model.
     */
    insuranceOptions?: InsuranceOptions;
    /**
     * Customs information that can be used to generate customs documents for international orders.
     *
     * Use the [InternationalOptions](https://www.shipstation.com/docs/api/models/international-options/) model.
     */
    internationalOptions?: InternationalOptions;
    /** The default [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm) for
     * the Product. */
    customsCountryCode?: string;
    /**
     * Various advanced options may be available depending on the shipping carrier that is used to ship the order.
     *
     * Use the [AdvancedOptions](https://www.shipstation.com/docs/api/models/advanced-options/) model.
     */
    advancedOptions?: AdvancedOptions;
    /**
     * Array of `tagIds`.
     *
     * Each `tagId` identifies a
     * [tag that has been associated with this order](https://help.shipstation.com/hc/en-us/articles/360026156931-Order-Tags).
     */
    tagIds?: Array<number>;
}
export interface CreateOrUpdateMultipleOrdersResponseItem extends Pick<Order, 'orderId' | 'orderNumber' | 'orderKey'> {
    success: boolean;
    errorMessage: string | null;
}
export interface CreateOrUpdateMultipleOrdersResponse {
    hasErrors: boolean;
    results: Array<CreateOrUpdateMultipleOrdersResponseItem>;
}
export interface CreateOrderLabelOptions {
    /** Identifies which order to ship. */
    orderId: number;
    /** The code for the carrier that is to appear on the label. */
    carrierCode: string;
    /** The code for the shipping service that is to appear on the label. */
    serviceCode: string;
    /**
     * The type of delivery confirmation that is to be used once the shipment is created.
     *
     * `direct_signature` is available for FedEx only.
     */
    confirmation: DeliveryConfirmation;
    /** The date the order should be shipped. */
    shipDate: string;
    /**
     * Weight of the order.
     *
     * Use the [Weight](https://www.shipstation.com/docs/api/models/weight/) model.
     */
    weight?: Weight;
    /**
     * Dimensions of the order.
     *
     * Use the [Dimensions](https://www.shipstation.com/docs/api/models/dimensions/) model.
     */
    dimensions?: Dimensions;
    /**
     * The shipping insurance information associated with this label.
     *
     * Use the [InsuranceOptions](https://www.shipstation.com/docs/api/models/insurance-options/) model.
     */
    insuranceOptions?: InsuranceOptions;
    /**
     * Customs information that can be used to generate customs documents for international orders.
     *
     * Use the [InternationalOptions](https://www.shipstation.com/docs/api/models/international-options/) model.
     */
    internationalOptions?: InternationalOptions;
    /**
     * Various advanced options may be available depending on the shipping carrier that is used to ship the order.
     *
     * Use the [AdvancedOptions](https://www.shipstation.com/docs/api/models/advanced-options/) model.
     */
    advancedOptions?: AdvancedOptions;
    /** Specifies whether or not to create a test label. Available for USPS labels only. */
    testLabel: boolean;
}
export interface CreateLabelResponse {
    shipmentId: number;
    shipmentCost: number;
    insuranceCost: number;
    trackingNumber: string;
    labelData: string;
    formData: any;
}
export interface MarkShippedOptions {
    /** Identifies the order that will be marked as **Shipped**. */
    orderId: number;
    /** Code of the carrier that is marked as having shipped the order. */
    carrierCode: string;
    /** Date order was shipped. */
    shipDate?: string;
    /** Tracking number of shipment. */
    trackingNumber?: string;
    /**
     * Specifies whether the customer should be notified of the shipment.
     *
     * @default false
     */
    notifyCustomer?: boolean;
    /**
     * Specifies whether the sales channel should be notified of the shipment.
     *
     * @default false
     */
    notifySalesChannel?: boolean;
}
export type MarkShippedResponse = Pick<Order, 'orderId' | 'orderNumber'>;
export interface OrderOperationResponse {
    success: boolean;
    message: string;
}
