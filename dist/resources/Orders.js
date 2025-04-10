var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseResource } from './Base';
export class Orders extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'orders');
        this.shipstation = shipstation;
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/get-order/)
     *
     * Retrieve a single order from the database.
     *
     * **Requirements:**
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
    get(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/${orderId}`,
                method: 'GET'
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/list-orders/)
     *
     * Obtains a list of orders that match the specified criteria.
     *
     * @param params The parameters for the request.
     *
     * @returns A list of orders.
     */
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: this.baseUrl,
                method: 'GET',
                params
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/list-by-tag/)
     *
     * Lists all orders that match the specified order status (`orderStatus`) and tag ID (`tagId`).
     *
     * @param params The parameters for the request.
     *
     * @returns A list of orders by tag.
     */
    listByTag(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/listbytag`,
                method: 'GET',
                params
            });
        });
    }
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
    createOrUpdate(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/createorder`,
                method: 'POST',
                data
            });
        });
    }
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
    createOrUpdateMultiple(orders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/createorders`,
                method: 'POST',
                data: orders
            });
        });
    }
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
    createLabel(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/createlabelfororder`,
                method: 'POST',
                data
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/add-tag/)
     *
     * Adds a tag to an order.
     *
     * **Requirements:**
     * - You'll need an `orderId` to make this API call.
     * - Find that `orderId` in your Response from the
     * [Create/Update Order call](https://www.shipstation.com/docs/api/orders/create-update-order/) if you are creating
     * the orders via OpenAPI.
     * - If you’re importing orders from a marketplace, you can list orders and find the `orderId` using one of the
     * endpoints in a [List Orders By Tag call](https://www.shipstation.com/docs/api/orders/list-by-tag/).
     * - You'll need a `tagId` to make this API call.
     * - To find a list of tags for this account (`tagId`), call
     * [Accounts - ListTags](https://www.shipstation.com/docs/api/accounts/list-tags/).
     *
     * @param orderId Identifies the order that will be tagged.
     * @param tagId Identifies the tag that will be applied to the order.
     *
     * @returns The success status of the operation.
     */
    addTag(orderId, tagId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/addtag`,
                method: 'POST',
                data: { orderId, tagId }
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/remove-tag/)
     *
     * Removes a tag from the specified order.
     *
     * **Requirements:**
     * - You'll need an `orderId` to make this API call.
     * - Find that `orderId` in your Response from the
     * [Create/Update Order call](https://www.shipstation.com/docs/api/orders/create-update-order/) if you are creating
     * the orders via OpenAPI.
     * - If you’re importing orders from a marketplace, you can list orders and find the `orderId` using one of the
     * endpoints in a [List Orders By Tag call](https://www.shipstation.com/docs/api/orders/list-by-tag/).
     * - You'll need a `tagId` to make this API call.
     * - To find a list of tags for this account (`tagId`), call
     * [Accounts - ListTags](https://www.shipstation.com/docs/api/accounts/list-tags/).
     *
     * @param orderId Identifies the order whose tag will be removed.
     * @param tagId Identifies the tag to remove.
     *
     * @returns The success status of the operation.
     */
    removeTag(orderId, tagId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/removetag`,
                method: 'POST',
                data: { orderId, tagId }
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/mark-shipped/)
     *
     * Marks an order as **Shipped** without creating a label in ShipStation.
     *
     * @param data The data for the request.
     *
     * @returns The details of the order that was marked as shipped.
     */
    markShipped(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/markshipped`,
                method: 'POST',
                data
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/delete/)
     *
     * Removes order from ShipStation's UI. Note this is a "soft" delete action so the order will still exist in the
     * database, but will be set to `inactive`.
     *
     * @param orderId The ID of the order to delete.
     *
     * @returns The success status of the operation.
     */
    delete(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/${orderId}`,
                method: 'DELETE'
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/assign-user/)
     *
     * Assigns a user to an order.
     *
     * **Requirements:**
     * - You'll need an `orderId` to make this API call. To find `orderId` for your account, make a
     * [List Orders call](https://www.shipstation.com/docs/api/orders/list-orders/).
     * - You'll need a `userId` to make this API call. To find each `userId` for your account, make a
     * [List Users call](https://www.shipstation.com/docs/api/users/list/).
     *
     * @param orderIds Identifies the set of orders that will be assigned to the user.
     *
     * **NOTE:** If ANY of the orders within the array are not found, no orders will have a user assigned to them.
     *
     * @param userId Identifies the user that will be applied to the orders. It should contain a GUID of the user to be
     * assigned to the array of orders.
     *
     * @returns The success status of the operation.
     */
    assignUser(orderIds, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/assignuser`,
                method: 'POST',
                data: { orderIds, userId }
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/unassign-user/)
     *
     * Unassigns a user from an order.
     *
     * **Requirements:**
     * - You'll need an `orderId` to make this API call.
     * - Find that `orderId` in your Response from the
     * [Create/Update Order call](https://www.shipstation.com/docs/api/orders/create-update-order/) if you are creating
     * the orders via OpenAPI.
     * - If you're importing orders from a marketplace, you can list orders and find the `orderId` using one of the
     * endpoints in a [List Orders By Tag call](https://www.shipstation.com/docs/api/orders/list-by-tag/).
     *
     * @param orderIds Identifies the set of orders that have the user unassigned.
     *
     * **NOTE:** If ANY of the orders within the array are not found, no orders will have their users unassigned.
     *
     * @returns The success status of the operation.
     */
    unassignUser(orderIds) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/unassignuser`,
                method: 'POST',
                data: { orderIds }
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/hold-order-until/)
     *
     * This method will change the status of the given order to **On Hold** status until the date you have specified, when
     * the status will automatically change to **Awaiting Shipment** status.
     *
     * **Requirements:**
     * - You'll need an `orderId` to make this API call.
     * - Find that `orderId` in your Response from the
     * [Create/Update Order call](https://www.shipstation.com/docs/api/orders/create-update-order/) if you are creating
     * the orders via OpenAPI.
     * - If you're importing orders from a marketplace, you can list orders and find the `orderId` using one of the
     * endpoints in a [List Orders By Tag call](https://www.shipstation.com/docs/api/orders/list-by-tag/).
     *
     * @param orderId Identifies the order that will be held.
     * @param holdUntilDate Date when order is moved from `on_hold` status to `awaiting_shipment`.
     *
     * @returns The success status of the operation.
     */
    hold(orderId, holdUntilDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/holduntil`,
                method: 'POST',
                data: { orderId, holdUntilDate }
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/orders/restore-from-hold/)
     *
     * This method will change the status of the given order from **On Hold** status to **Awaiting Shipment** status. This
     * endpoint is used when a
     * [`holdUntilDate` is attached](https://www.shipstation.com/docs/api/orders/hold-order-until/) to an order.
     *
     * **Requirements:**
     * - You'll need an `orderId` to make this API call.
     * - Find that `orderId` in your Response from the
     * [Create/Update Order call](https://www.shipstation.com/docs/api/orders/create-update-order/) if you are creating
     * the orders via OpenAPI.
     * - If you're importing orders from a marketplace, you can list orders and find the `orderId` using one of the
     * endpoints in a [List Orders By Tag call](https://www.shipstation.com/docs/api/orders/list-by-tag/).
     *
     * @param orderId Identifies the order that will be restored to `awaiting_shipment` status from `on_hold`.
     *
     * @returns The success status of the operation.
     */
    restoreFromHold(orderId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/restorefromhold`,
                method: 'POST',
                data: { orderId }
            });
        });
    }
}
