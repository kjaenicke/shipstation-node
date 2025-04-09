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
