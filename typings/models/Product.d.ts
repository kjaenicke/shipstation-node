import { IPaginatedResult } from "./Pagination";
export interface IProduct {
    aliases: IProductAlias[] | null;
    productId: number;
    sku: string | null;
    name: string | null;
    upc: string | null;
    thumbnailUrl: string | null;
    price: number | null;
    defaultCost: number | null;
    length: number | null;
    width: number | null;
    height: number | null;
    weightOz: number | null;
    internalNotes: string | null;
    fulfillmentSku: string | null;
    createDate: string | null;
    modifyDate: string | null;
    active: boolean | null;
    productCategory: (number | string)[] | null;
    productType: string | null;
    warehouseLocation: string | null;
    defaultCarrierCode: string | null;
    defaultServiceCode: string | null;
    defaultPackageCode: string | null;
    defaultIntlCarrierCode: string | null;
    defaultIntlServiceCode: string | null;
    defaultIntlPackageCode: string | null;
    defaultConfirmation: string | null;
    defaultIntlConfirmation: string | null;
    customsDescription: string | null;
    customsValue: number | null;
    customsTariffNo: string | null;
    customsCountryCode: string | null;
    noCustoms: boolean | null;
    tags: (number | string)[] | null;
}
export interface IProductPaginationResult extends IPaginatedResult {
    products: IProduct[];
}
export interface IProductUpdateResponse {
    success: boolean;
    message: string;
}
export interface IProductAlias {
    storeId: number;
    alias: string;
}
