import type { Product } from '../models/Product';
import type { PaginatedRequest, PaginatedResponse } from './pagination';
export type GetProductResponse = Product;
export interface ListProductsOptions extends PaginatedRequest {
    /** Returns products that match the specified SKU. */
    sku?: string;
    /** Returns products that match the specified product name. */
    name?: string;
    /** Returns products that match the specified productCategoryId. */
    productCategoryId?: string;
    /** Returns products that match the specified productTypeId. */
    productTypeId?: string;
    /** Returns products that match the specified tagId. */
    tagId?: string;
    /** Returns products that were created after the specified date. */
    startDate?: string;
    /** Returns products that were created before the specified date. */
    endDate?: string;
    /** Sorts the order of the response based on the specified value. */
    sortBy?: 'SKU' | 'ModifyDate' | 'CreateDate';
    /** Specifies whether the list should include inactive products. */
    showInactive?: boolean;
    /** Return a product that matches the specified UPC code. */
    upc?: string;
}
interface ProductResponseItem extends Product {
    upc: string;
    thumbnailURL: string;
}
export interface ListProductsResponse extends PaginatedResponse {
    products: Array<ProductResponseItem>;
}
export interface UpdateProductResponse {
    success: boolean;
    message: string;
}
export {};
