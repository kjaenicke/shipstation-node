import type { Address } from '../models/Address';
import type { PaginatedRequest, PaginatedResponse } from './pagination';

export interface ListFulfillmentsOptions extends PaginatedRequest {
  /** Returns the fulfillment with the specified fulfillment ID. */
  fulfillmentId?: number;
  /** Returns fulfillments whose orders have the specified order ID. */
  orderId?: number;
  /** Returns fulfillments whose orders have the specified order number. */
  orderNumber?: string;
  /** Returns fulfillments with the specified tracking number. */
  trackingNumber?: string;
  /** Returns fulfillments shipped to the specified recipient name. */
  recipientName?: string;
  /** Returns fulfillments created on or after the specified `createDate`. */
  createDateStart?: string;
  /** Returns fulfillments created on or before the specified `createDate`. */
  createDateEnd?: string;
  /** Returns fulfillments with the `shipDate` on or after the specified date. */
  shipDateStart?: string;
  /** Returns fulfillments with the `shipDate` on or before the specified date. */
  shipDateEnd?: string;
  /**
   * Sort the responses by a set value. The response will be sorted based on the ascending dates (oldest to most
   * current).
   *
   * If left empty, the response will default to be sorted by ascending `createDate`.
   */
  sortBy?: 'ShipDate' | 'CreateDate';
}

export interface FulfillmentResponseItem {
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
  sellerFillProviderId: number;
  sellerFillProviderName: string;
  fulfillmentServiceCode: string | null;
  fulfillmentProviderCode: string | null;
  fulfillmentFee: number;
  voidRequested: boolean;
  voided: boolean;
  marketplaceNotified: boolean;
  notifyErrorMessage: string | null;
  shipTo: Address;
}

export interface ListFulfillmentsResponse extends PaginatedResponse {
  fulfillments: Array<FulfillmentResponseItem>;
}
