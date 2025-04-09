export interface CustomsItem {
    /**
     * When this field is not submitted in the [Order/CreateOrder call](https://www.shipstation.com/docs/api/orders/create-update-order/),
     * it will create a new customs line. If this field is included when submitting an order through Order/CreateOrder,
     * then it will look for the corresponding customs line and update any values.
     * @readonly
     */
    customsItemId: number;
    /** A short description of the CustomsItem */
    description: string;
    /** The quantity for this line item */
    quantity: number;
    /** The value (in USD) of the line item */
    value: number;
    /** The Harmonized Commodity Code for this line item */
    harmonizedTariffCode: string;
    /**
     * The [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm) where the
     * item originated
     */
    countryOfOrigin: string;
}
