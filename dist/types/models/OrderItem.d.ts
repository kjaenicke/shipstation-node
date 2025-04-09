import type { Weight } from './Weight';
import type { ItemOption } from './ItemOption';
export interface OrderItem {
    /**
     * The system-generated identifier for the OrderItem.
     * @readonly
     */
    orderItemId: number;
    /** An identifier for the `OrderItem` in the originating system. */
    lineItemKey: string;
    /** The SKU (stock keeping unit) identifier for the product associated with this line item. */
    sku: string;
    /** The name of the product associated with this line item. Cannot be `null` */
    name: string;
    /** The public URL to the product image. */
    imageUrl?: string;
    /** The [Weight](https://www.shipstation.com/docs/api/models/weight/) */
    weight?: Weight;
    /** The quantity of product ordered. */
    quantity: number;
    /** The sell price of a single item specified by the order source. */
    unitPrice?: number;
    /** The tax price of a single item specified by the order source. */
    taxAmount?: number;
    /** The shipping amount or price of a single item specified by the order source. */
    shippingAmount?: number;
    /**
     * The location of the product within the seller's warehouse
     * @example "Aisle 3, Shelf A, Bin 5"
     */
    warehouseLocation?: string;
    /** See [ItemOption](https://www.shipstation.com/docs/api/models/item-option/) for specifics. */
    options?: Array<ItemOption>;
    /** The identifier for the Product Resource associated with this `OrderItem`. */
    productId?: number;
    /**
     * The fulfillment SKU associated with this `OrderItem` if the fulfillment provider requires an identifier other than
     * the SKU.
     */
    fulfillmentSku?: string;
    /** Indicates that the `OrderItem` is a non-physical adjustment to the order (e.g. a discount or promotional code) */
    adjustment: boolean;
    /** The Universal Product Code (UPC) associated with this `OrderItem`. */
    upc?: string;
    /**
     * The timestamp the `orderItem` was created in ShipStation's database.
     * @readonly
     */
    createDate: string;
    /**
     * The timestamp the `orderItem` was modified in ShipStation. `modifyDate` will equal `createDate` until a
     * modification is made.
     * @readonly
     */
    modifyDate: string;
}
