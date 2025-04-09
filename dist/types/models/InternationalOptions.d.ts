import type { CustomsItem } from './CustomsItem';
export type InternationalOptionsContentType = 'merchandise' | 'documents' | 'gift' | 'returned_goods' | 'sample';
export interface InternationalOptions {
    /** Contents of international shipment. */
    contents: InternationalOptionsContentType;
    /**
     * See the [CustomsItem](https://www.shipstation.com/docs/api/models/customs-item/) page for specifics.
     *
     * NOTE: To supply `customsItems` in the CreateOrder call and have the values not be overwritten by ShipStation, you
     * must set the `International Settings > Customs Declarations` to "Leave blank (Enter Manually)" in the UI:
     * https://ss.shipstation.com/#/settings/international
     *
     * Please see the [ShipStation's International Settings KB article](https://help.shipstation.com/hc/en-us/articles/360035991611)
     * to learn how to make this change in the UI.
     */
    customsItems: Array<CustomsItem>;
    /**
     * Non-Delivery option for international shipment.
     *
     * NOTE: If the shipment is created through the [Orders/CreateLabelForOrder](https://www.shipstation.com/docs/api/orders/create-label/)
     * endpoint and the `nonDelivery` field is not specified, then the value defaults based on the International Setting
     * in the UI.
     *
     * If the call is being made to the [Shipments/CreateLabel](https://www.shipstation.com/docs/api/shipments/create-label/)
     * endpoint and the `nonDelivery` field is not specified, then the value will default to `return_to_sender`.
     */
    nonDelivery: 'return_to_sender' | 'treat_as_abandoned';
}
