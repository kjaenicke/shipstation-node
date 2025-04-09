export type StoreStatusMapping =
  | { orderStatus: 'awaiting_payment'; statusKey: 'Pending' }
  | { orderStatus: 'awaiting_shipment'; statusKey: 'Processing' }
  | { orderStatus: 'shipped'; statusKey: 'Completed' }
  | { orderStatus: 'cancelled'; statusKey: 'Cancelled' }
  | { orderStatus: 'on_hold'; statusKey: 'On-hold' };

export interface StoreResponseItem {
  storeId: number;
  storeName: string;
  marketplaceId: number;
  marketplaceName: string;
  accountName: string | null;
  email: string | null;
  integrationUrl: string | null;
  active: boolean;
  companyName: string;
  phone: string;
  publicEmail: string;
  website: string;
  refreshDate: string;
  lastRefreshAttempt: string | null;
  createDate: string;
  modifyDate: string;
  autoRefresh: boolean;
  statusMappings: Array<StoreStatusMapping>;
}

export interface ListStoresOptions {
  /** Determines whether or not inactive stores will be returned in the list of stores. */
  showInactive?: boolean;
  /** Returns stores of this marketplace type. */
  marketplaceId?: number;
}

export type ListStoresResponse = Array<Omit<StoreResponseItem, 'statusMappings'>>;
