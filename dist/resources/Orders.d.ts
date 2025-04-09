import type { Order, CreateOrderLabelOptions, ListOrdersByTagOptions } from '../types';
import type Shipstation from '../shipstation';
import { BaseResource } from './Base';
import type { CreateLabelResponse, CreateOrUpdateMultipleOrdersResponse, CreateOrUpdateOrderOptions, ListOrdersOptions, ListOrdersResponse, OrderResponseItem } from '../types';
export declare class Orders extends BaseResource {
    protected shipstation: Shipstation;
    constructor(shipstation: Shipstation);
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/get-order/)
     *
     * Retrieve a single order from the database.
     *
     * **Requirements**
     * - You'll need an `orderId` to make this API call.
     * - Find that orderId in your Response from the
     * [Create/Update Order call](https://www.shipstation.com/docs/api/orders/create-update-order/) if you are creating the orders via OpenAPI.
     * - If you're importing orders from a marketplace, you can list orders and find the `orderId` using one of the
     * endpoints in a [List Orders By Tag call](https://www.shipstation.com/docs/api/orders/list-by-tag/).
     *
     * @param orderId The ID of the order to retrieve.
     *
     * @returns The order details.
     */
    get(orderId: number): Promise<OrderResponseItem>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/list-orders/)
     *
     * Obtains a list of orders that match the specified criteria.
     *
     * @param params The parameters for the request.
     *
     * @returns A list of orders.
     */
    list(params?: ListOrdersOptions): Promise<ListOrdersResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/list-by-tag/)
     *
     * Lists all orders that match the specified order status (`orderStatus`) and tag ID (`tagId`).
     *
     * @param params The parameters for the request.
     *
     * @returns A list of orders by tag.
     */
    listByTag(params: ListOrdersByTagOptions): Promise<ListOrdersResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/create-update-order/)
     *
     * You can use this method to create a new order or update an existing order. If the `orderKey` is specified,
     * ShipStation will attempt to locate the order with the specified `orderKey`. If found, the existing order with that
     * key will be updated. If the `orderKey` is not found, a new order will be created with that `orderKey`.
     *
     * For split orders,
     * [see the `mergedOrSplit` property in Advanced Options](https://www.shipstation.com/docs/api/models/advanced-options/).
     * This property (key) is always required for merged or split orders.
     *
     * This call does not currently support partial updates. The entire resource must be provided in the body of the
     * request.
     *
     * **NOTE:** Only orders in an open status in ShipStation (`awaiting_payment`, `awaiting_shipment`, and `on_hold`) can
     * be updated through this method. Orders in the `cancelled` and `shipped` states may not be updated. The body of this
     * request should specify an [Order](https://www.shipstation.com/docs/api/models/order/) object:
     *
     * @param data The data for the request.
     *
     * @returns The created or updated order.
     */
    createOrUpdate(data: CreateOrUpdateOrderOptions): Promise<Order>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/create-update-multiple-orders/)
     *
     * This endpoint can be used to create or update multiple orders in one request. If the `orderKey` is specified,
     * ShipStation will attempt to locate the order with the specified `orderKey`. If found, the existing order with that
     * key will be updated. If the `orderKey` is not found, a new order will be created with that `orderKey`.
     *
     * For split orders, the `orderKey` is always required when creating or updating orders, and the `orderId` is always
     * required for updates.
     *
     * This call does not currently support partial updates; the entire resource must be provided in the body of the
     * request.
     *
     * **NOTE:** Only orders in an open status in ShipStation (`awaiting_payment`, `awaiting_shipment`,
     * `pending_fulfillment` and `on_hold`) can be updated through this method. Orders in the `cancelled` or `shipped`
     * status may not be updated. The body of this request should specify an array of
     * [Order](https://www.shipstation.com/docs/api/models/order/) objects.
     *
     * @param orders An array of [Order](https://www.shipstation.com/docs/api/models/order/) objects (maximum of 100 per
     * request).
     *
     * @returns The created or updated orders.
     */
    createOrUpdateMultiple(orders: Array<CreateOrUpdateOrderOptions>): Promise<CreateOrUpdateMultipleOrdersResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/create-label/)
     *
     * Creates a shipping label for a given order. The `labelData` field returned in the response is a base64 encoded PDF
     * value. Simply decode and save the output as a PDF file to retrieve a printable label.
     *
     * @param data The data for the request.
     *
     * @returns The created label.
     */
    createLabel(data: CreateOrderLabelOptions): Promise<CreateLabelResponse>;
}
