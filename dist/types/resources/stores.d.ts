export type StoreStatusMapping = {
    orderStatus: 'awaiting_payment';
    statusKey: 'Pending';
} | {
    orderStatus: 'awaiting_shipment';
    statusKey: 'Processing';
} | {
    orderStatus: 'shipped';
    statusKey: 'Completed';
} | {
    orderStatus: 'cancelled';
    statusKey: 'Cancelled';
} | {
    orderStatus: 'on_hold';
    statusKey: 'On-hold';
};
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
export interface DeactivateStoreResponse {
    success: boolean;
    message: string;
}
export interface GetRefreshRateResponse {
    storeId: number;
    refreshStatusId: number;
    refreshStatus: string;
    lastRefreshAttempt: string;
    refreshDate: string;
}
export interface ReactivateStoreResponse {
    success: boolean;
    message: string;
}
export interface RefreshStoreOptions {
    /**
     * Specifies the store that will get refreshed. If the `storeId` is not specified, a store refresh will be initiated
     * for all refreshable stores on that account.
     */
    storeId?: number;
    /**
     * Specifies the starting date for new order imports.
     *
     * **This is only needed if you are trying to retrieve historical orders.**
     *
     * If the `refreshDate` is not specified, ShipStation will use the last recorded `refreshDate` for that store.
     *
     * **INFO:**
     * - Sending the `refreshDate` without a time (Ex. 2020-05-29) will be interpreted by our system as midnight (00:00)
     * PST of the date sent.
     * - The correct format for the refresh date is **YYYY-MM-DD HH:MM:SS**, it needs to be representative of the time in
     * PST.
     */
    refreshDate?: string;
}
export interface RefreshStoreResponse {
    success: boolean;
    message: string;
}
export interface ListMarketplacesResponseItem {
    name: string;
    marketplaceId: number;
    canRefresh: boolean;
    supportsCustomMappings: boolean;
    supportsCustomStatuses: boolean;
    canConfirmShipments: boolean;
}
export type ListMarketplacesResponse = Array<ListMarketplacesResponseItem>;
