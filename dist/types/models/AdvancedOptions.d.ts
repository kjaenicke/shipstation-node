export interface AdvancedOptions {
    /**
     * Specifies the warehouse where the order is to ship from.
     * If the order was fulfilled using a fill provider, no warehouse is attached to these orders and this will result in a `null` value being returned.
     */
    warehouseId?: number | null;
    /** Specifies whether or not the order is non-machinable. */
    nonMachinable?: boolean;
    /** Specifies whether or not the order is to be delivered on a Saturday. */
    saturdayDelivery?: boolean;
    /** Specifies whether or not the order contains alcohol. */
    containsAlcohol?: boolean;
    /**
     * ID of store that is associated with the order.
     * If not specified in the [CreateOrder](https://www.shipstation.com/docs/api/orders/create-update-order/) call either
     * to create or update an order, ShipStation will default to the first manual store on the account. Can only be
     * specified during order creation.
     */
    storeId?: number;
    /** Field that allows for custom data to be associated with an order. */
    customField1?: string;
    /** Field that allows for custom data to be associated with an order. */
    customField2?: string;
    /** Field that allows for custom data to be associated with an order. */
    customField3?: string;
    /**
     * Identifies the original source/marketplace of the order.
     */
    source?: string;
    /**
     * Returns whether or not an order has been merged or split with another order.
     * @readonly
     */
    mergedOrSplit?: boolean;
    /**
     * Array of `orderIds`.
     * Each `orderId` identifies an order that was merged with the associated order.
     * @readonly
     */
    mergedIds?: Array<number>;
    /**
     * If an order has been split, it will return the Parent ID of the order with which it has been split.
     * If the order has not been split, this field will return `null`.
     * @readonly
     */
    parentId?: number;
    /**
     * Identifies which party to bill.
     * `billTo values can only be used when [creating/updating orders](https://www.shipstation.com/docs/api/orders/create-update-order/).
     */
    billToParty?: 'my_account' | 'my_other_account' | 'recipient' | 'third_party';
    /**
     * Account number of `billToParty`.
     * `billTo` values can only be used when [creating/updating orders](https://www.shipstation.com/docs/api/orders/create-update-order/).
     */
    billToAccount?: string;
    /**
     * Postal Code of `billToParty`.
     * `billTo` values can only be used when [creating/updating orders](https://www.shipstation.com/docs/api/orders/create-update-order/).
     */
    billToPostalCode?: string;
    /**
     * Country Code of `billToParty`.
     * `billTo` values can only be used when [creating/updating orders](https://www.shipstation.com/docs/api/orders/create-update-order/).
     */
    billToCountryCode?: string;
    /**
     * When using `my_other_account` as the `billToParty` value, the `shippingProviderId` value that is associated with
     * the desired account.
     *
     * Make a [List Carriers](https://www.shipstation.com/docs/api/carriers/list/) call to obtain `shippingProviderId` values.
     */
    billToMyOtherAccount?: number;
}
