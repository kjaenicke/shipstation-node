import type { IPaginatedResult } from './Pagination';

export interface IProduct {
  aliases: Array<IProductAlias> | null; // An array of aliases for the product.
  productId: number; // The system-generated identifier for the product.
  sku: string | null; // Stock Keeping Unit (SKU). A user-defined value for a product to help identify the product. We suggest that each product should contain a unique SKU.
  name: string | null; // Name or description of the product.
  upc: string | null; // Universal Product Code (UPC) for the product.
  thumbnailUrl: string | null; // URL to the thumbnail image for the product.
  price: number | null; // The unit price of the product.
  defaultCost: number | null; // The seller's cost for this product.
  length: number | null; // The length of the product. Unit of Measurement (UOM) is User Interface (UI)-dependent.
  width: number | null; // The width of the product. Unit of Measurement (UOM) is User Interface (UI)-dependent.
  height: number | null; // The height of the product. Unit of Measurement (UOM) is User Interface (UI)-dependent.
  weightOz: number | null; // The weight of a single item in ounces.
  internalNotes: string | null; // Seller's private notes for the product.
  fulfillmentSku: string | null; // Stock Keeping Unit (SKU) for the fulfillment of that product by a 3rd party.
  createDate: string | null; // The timestamp for when the product record was created in ShipStation's database.
  modifyDate: string | null; // The timestamp for when the product record was modified in ShipStation.
  active: boolean | null; // Specifies whether or not the product is an active record.
  productCategory: Array<number | string> | null; // The ProductCategory used to organize and report on similar products.
  productType: string | null; // Specifies the product type.
  warehouseLocation: string | null; // The warehouse location associated with the product record.
  defaultCarrierCode: string | null; // The default domestic shipping carrier for this product.
  defaultServiceCode: string | null; // The default domestic shipping service for this product.
  defaultPackageCode: string | null; // The default domestic packageType for this product.
  defaultIntlCarrierCode: string | null; // The default international shipping carrier for this product.
  defaultIntlServiceCode: string | null; // The default international shipping service for this product.
  defaultIntlPackageCode: string | null; // The default international packageType for this product.
  defaultConfirmation: string | null; // The default domestic Confirmation type for this Product.
  defaultIntlConfirmation: string | null; // The default international Confirmation type for this Product.
  customsDescription: string | null; // The default customs Description for the product.
  customsValue: number | null; // The default customs Declared Value for the product.
  customsTariffNo: string | null; // The default Harmonized Code for the Product.
  customsCountryCode: string | null; // The default two-letter ISO Origin Country code for the Product.
  noCustoms: boolean | null; // If true, this product will not be included on international customs forms.
  tags: Array<number | string> | null; // The ProductTag helps to organize and visually identify products.
}

export interface IProductPaginationResult extends IPaginatedResult {
  products: Array<IProduct>;
}

export interface IProductUpdateResponse {
  success: boolean;
  message: string;
}

export interface IProductAlias {
  storeId: number; // The store ID of the product alias, or null if the alias is not associated with a store.
  alias: string; // The alias for the product.
}
