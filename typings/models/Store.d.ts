export interface IStore {
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
    statusMappings: Array<{
        orderStatus: string;
        statusKey: string;
    }> | null;
}
