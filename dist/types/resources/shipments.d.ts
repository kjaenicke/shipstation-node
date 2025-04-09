import type { Address } from 'cluster';
import type { Dimensions, InsuranceOptions, InternationalOptions, AdvancedOptions, Weight, DeliveryConfirmation, OrderItem } from '../models';
import type { PaginatedRequest, PaginatedResponse } from './pagination';
export interface CreateShipmentLabelOptions {
    /** Identifies the carrier to be used for this label. */
    carrierCode: string;
    /** Identifies the shipping service to be used for this label. */
    serviceCode: null | string;
    /** Identifies the packaging type that should be used for this label. */
    packageCode: null | string;
    /** The type of delivery confirmation that is to be used once the shipment is created. */
    confirmation?: DeliveryConfirmation;
    /** The date the shipment will be shipped. */
    shipDate: string;
    /** [Weight](https://www.shipstation.com/docs/api/models/weight/) of the order. */
    weight: Weight;
    /** [Dimensions](https://www.shipstation.com/docs/api/models/dimensions/) of the order. */
    dimensions?: Dimensions;
    /**
     * Address indicating the shipment's origin. Use the [Address](https://www.shipstation.com/docs/api/models/address/)
     * model.
     */
    shipFrom: Address;
    /**
     * Address indicating the shipment's destination. Use the [Address](https://www.shipstation.com/docs/api/models/address/)
     * model.
     */
    shipTo: Address;
    /**
     * The shipping insurance information associated with this order.
     *
     * Learn more about [InsuranceOptions](https://www.shipstation.com/docs/api/models/insurance-options/)
     */
    insuranceOptions?: InsuranceOptions;
    /**
     * Customs information that can be used to generate customs documents for international orders.
     *
     * Learn more about [InternationalOptions](https://www.shipstation.com/docs/api/models/international-options/)
     */
    internationalOptions?: InternationalOptions;
    /**
     * Various [AdvancedOptions](https://www.shipstation.com/docs/api/models/advanced-options/) may be available depending
     * on the shipping carrier that is used to ship the order.
     */
    advancedOptions?: AdvancedOptions;
    /**
     * Specifies whether a test label should be created.
  
     * @default `false`
     */
    testLabel?: boolean;
}
export interface ShipmentResponseItem {
    shipmentId: number;
    orderId: number | null;
    orderKey: string;
    userId: string | null;
    customerEmail: string | null;
    orderNumber: string | null;
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
    warehouseId: number | null;
    voided: boolean;
    voidDate: string | null;
    marketplaceNotified: boolean;
    notifyErrorMessage: string | null;
    shipTo: Array<Address> | null;
    weight: Array<Weight> | null;
    dimensions: Array<Dimensions> | null;
    insuranceOptions: Array<InsuranceOptions> | null;
    advancedOptions: Array<AdvancedOptions> | null;
    shipmentItems: Array<OrderItem> | null;
    labelData: string | null;
    formData: any;
}
export interface VoidShipmentLabelResponse {
    approved: boolean;
    message: string;
}
export interface GetRatesOptions {
    /** Returns rates for the specified carrier. */
    carrierCode: string;
    /** Returns rates for the specified shipping service. */
    serviceCode?: null | string;
    /** Returns rates for the specified package type. */
    packageCode?: null | string;
    /** Originating postal code. */
    fromPostalCode: string;
    /** Originating city. */
    fromCity?: string;
    /** Originating state. */
    fromState?: string;
    /**
     * Originating warehouse ID.
     *
     * The `fromCity` and `fromState` fields will take precedence over the `fromWarehouseId` field if all three are
     * entered.
     */
    fromWarehouseId?: string;
    /**
     * Destination State/Province. Please use two-character state/province abbreviation.
     *
     * **NOTE:** This field is **Required** for the following carriers: **UPS**
     */
    toState?: string;
    /**
     * Destination Country. Please use the
     * [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm).
     */
    toCountry: string;
    /** Destination Postal Code. */
    toPostalCode: string;
    /** Destination City. */
    toCity?: string;
    /** [Weight](https://www.shipstation.com/docs/api/models/weight/) of the order. */
    weight: Weight;
    /** [Dimensions](https://www.shipstation.com/docs/api/models/dimensions/) of the order. */
    dimensions?: Dimensions;
    /**
     * The type of delivery confirmation that is to be used once the shipment is created.
     *
     * The option for `direct_signature` is available for FedEx only.
     */
    confirmation?: DeliveryConfirmation;
    /**
     * Carriers may return different rates based on whether or not the address is commercial (false) or residential (true).
     *
     * @default false
     */
    residential?: boolean;
}
export interface GetRatesResponseItem {
    serviceName: string;
    serviceCode: string;
    shipmentCost: number;
    otherCost: number;
}
export type GetRatesResponse = Array<GetRatesResponseItem>;
export interface ListShipmentsOptions extends PaginatedRequest {
    /** Returns shipments shipped to the specified recipient name. */
    recipientName?: string;
    /**
     * Returns shipments shipped to the specified country code. Please use the
     * [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm).
     */
    recipientCountryCode?: string;
    /** Returns shipments whose orders have the specified order number. */
    orderNumber?: string;
    /** Returns shipments whose orders have the specified order ID. */
    orderId?: number;
    /** Returns shipments shipped with the specified carrier. */
    carrierCode?: string;
    /** Returns shipments shipped with the specified shipping service. */
    serviceCode?: string;
    /** Returns shipments with the specified tracking number. */
    trackingNumber?: string;
    /**
     * The default [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm)
     * for the Product.
     */
    customsCountryCode?: string;
    /** Returns shipments created on or after the specified `createDate`. */
    createDateStart?: string;
    /** Returns shipments created on or before the specified `createDate`. */
    createDateEnd?: string;
    /** Returns shipments with the `shipDate` on or after the specified date. */
    shipDateStart?: string;
    /** Returns shipments with the `shipDate` on or before the specified date. */
    shipDateEnd?: string;
    /** Returns shipments voided on or after the specified date. */
    voidDateStart?: string;
    /** Returns shipments voided on or before the specified date. */
    voidDateEnd?: string;
    /** Returns shipments whose orders belong to the specified store ID. */
    storeId?: number;
    /**
     * Specifies whether to include shipment items with results.
     *
     * @default false
     */
    includeShipmentItems?: boolean;
    /**
     * Sort the responses by a set value.
     *
     * The response will be sorted based on the ascending dates (oldest to most current).
     *
     * @default createDate (ascending)
     */
    sortBy?: 'ShipDate' | 'CreateDate';
}
export interface ListShipmentsResponse extends PaginatedResponse {
    shipments: Array<ShipmentResponseItem>;
    total: number;
    page: number;
    pages: number;
}
