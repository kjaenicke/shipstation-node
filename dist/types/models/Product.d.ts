import type { ProductCategory } from './ProductCategory';
import type { ProductTag } from './ProductTag';
export type DeliveryConfirmation = 'none' | 'delivery' | 'signature' | 'adult_signature' | 'direct_signature';
export interface Product {
    aliases: string | null;
    /**
     * The system-generated identifier for the product.
     * @readonly
     */
    productId: number;
    /**
     * Stock Keeping Unit (SKU). A user-defined value for a product to help identify the product. We suggest that each
     * product should contain a unique SKU.
     */
    sku: string | null;
    /** Name or description of the product. */
    name: string | null;
    /** The unit price of the product. */
    price: number | null;
    /** The seller's cost for this product. */
    defaultCost: number | null;
    /**
     * The length of the product. Unit of Measurement (UOM) is User Interface (UI)-dependent. No conversions will be made
     * from one UOM to another. See the
     * [knowledge base article about the Shipping tab under Product Details here](https://help.shipstation.com/hc/en-us/articles/360025870012#UUID-fd4ba8eb-073f-8b57-d044-047d386b2e97_UUID-cf5e5c25-f8d2-3022-0d9d-aea7d774a07d)
     * for more details.
     */
    length: number | null;
    /**
     * The width of the product. Unit of Measurement (UOM) is User Interface (UI)-dependent. No conversions will be made
     * from one UOM to another. See the
     * [knowledge base article about the Shipping tab under Product Details here](https://help.shipstation.com/hc/en-us/articles/360025870012#UUID-fd4ba8eb-073f-8b57-d044-047d386b2e97_UUID-cf5e5c25-f8d2-3022-0d9d-aea7d774a07d)
     * for more details.
     */
    width: number | null;
    /**
     * The height of the product. Unit of Measurement (UOM) is User Interface (UI)-dependent. No conversions will be made
     * from one UOM to another. See the
     * [knowledge base article about the Shipping tab under Product Details here](https://help.shipstation.com/hc/en-us/articles/360025870012#UUID-fd4ba8eb-073f-8b57-d044-047d386b2e97_UUID-cf5e5c25-f8d2-3022-0d9d-aea7d774a07d)
     * for more details.
     */
    height: number | null;
    /** The weight of a single item in ounces. */
    weightOz: number | null;
    /** Seller's private notes for the product. */
    internalNotes: string | null;
    /** Stock Keeping Unit (SKU) for the fulfillment of that product by a 3rd party. */
    fulfillmentSku: string | null;
    /**
     * The timestamp for when the product record was created in ShipStation's database.
     * @readonly
     */
    createDate: string | null;
    /**
     * The timestamp for when the product record was modified in ShipStation.
     * @readonly
     */
    modifyDate: string | null;
    /** Specifies whether or not the product is an active record. */
    active: boolean | null;
    /**
     * The [ProductCategory](https://www.shipstation.com/docs/api/models/product-category/) used to organize and report on
     * similar products.
     *
     * See the
     * [knowledge base article about Product Categories](https://help.shipstation.com/hc/en-us/articles/360025870332-Product-Categories)
     * for more information.
     */
    productCategory: Array<ProductCategory> | null;
    /**
     * Specifies the product type.
     *
     * See the [knowledge base article about Product Types](https://help.shipstation.com/hc/en-us/articles/360026158491-Product-Types)
     * for more information.
     */
    productType: string | null;
    /**
     * The warehouse location associated with the product record.
     *
     * Learn more in the [Link Inventory Warehouse to Ship From Location](https://help.shipstation.com/hc/en-us/articles/360026158531-Set-Up-ShipStation-s-Internal-Inventory#UUID-c3573229-712e-6978-d209-1bc552b2fd04)
     * section of the [Set Up Internal Inventory](https://help.shipstation.com/hc/en-us/articles/360026158531-Set-Up-ShipStation-s-Internal-Inventory)
     * article.
     */
    warehouseLocation: string | null;
    /** The default domestic shipping carrier for this product. */
    defaultCarrierCode: string | null;
    /** The default domestic shipping service for this product. */
    defaultServiceCode: string | null;
    /** The default domestic `packageType` for this product. */
    defaultPackageCode: string | null;
    /** The default international shipping carrier for this product. */
    defaultIntlCarrierCode: string | null;
    /** The default international shipping service for this product. */
    defaultIntlServiceCode: string | null;
    /** The default international `packageType` for this product. */
    defaultIntlPackageCode: string | null;
    /** The default domestic Confirmation type for this Product. */
    defaultConfirmation: DeliveryConfirmation | null;
    /** The default international Confirmation type for this Product. */
    defaultIntlConfirmation: DeliveryConfirmation | null;
    /** The default customs Description for the product. */
    customsDescription: string | null;
    /** The default customs Declared Value for the product. */
    customsValue: number | null;
    /**
     * The default Harmonized Code for the Product.
     *
     * Learn more about Harmonization Codes under
     * [Product Default Custom Settings in the International Settings article](https://help.shipstation.com/hc/en-us/articles/360035991611-ShipStation-s-International-Settings#UUID-391c67e1-e7bc-9df2-b2e4-d7cc758590c5).
     */
    customsTariffNo: string | null;
    /**
     * The default [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm) for
     * the Product.
     */
    customsCountryCode: string | null;
    /** If `true`, this product will not be included on international customs forms. */
    noCustoms: boolean | null;
    /**
     * The [ProductTag](https://www.shipstation.com/docs/api/models/product-tag/) helps to organize and visually identify
     * products.
     *
     * See the knowledge base
     * [article on Product Automation Defaults](https://www.shipstation.com/docs/api/models/product/#:~:text=article%20on%20Product%20Automation%20Defaults)
     * and this article [about Order Tags](https://help.shipstation.com/hc/en-us/articles/360026156931-Order-Tags).
     */
    tags: Array<ProductTag> | null;
}
