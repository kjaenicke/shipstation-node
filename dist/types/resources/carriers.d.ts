export interface CarrierResponseItem {
    name: string;
    code: string;
    accountNumber: string;
    requiresFundedAccount: boolean;
    balance: number;
    nickname: string | null;
    shippingProviderId: number;
    primary: boolean;
}
export type ListCarriersResponse = Array<CarrierResponseItem>;
export type AddFundsResponse = Omit<CarrierResponseItem, 'nickname' | 'shippingProviderId' | 'primary'>;
export interface ListPackagesOrServicesResponseItem {
    carrierCode: string;
    code: string;
    name: string;
    domestic: boolean;
    international: boolean;
}
export type ListPackagesResponse = Array<ListPackagesOrServicesResponseItem>;
export type ListServicesResponse = Array<ListPackagesOrServicesResponseItem>;
