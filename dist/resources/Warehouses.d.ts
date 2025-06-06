import type ShipStation from '../shipstation';
import { BaseResource } from './Base';
import type { CreateWarehouseOptions, DeleteWarehouseResponse, ListWarehousesResponse, UpdateWarehouseOptions, WarehouseResponseItem } from '../types';
export declare class Warehouses extends BaseResource {
    protected shipstation: ShipStation;
    constructor(shipstation: ShipStation);
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/warehouses/get/)
     *
     * Returns a list of active Ship From Locations (formerly known as warehouses) on the ShipStation account.
     *
     * **NOTE:** In the API, the endpoint is called warehouse, but the process actually affects Ship From locations in the
     * UI on the application side of operations.
     *
     * @param warehouseId A unique ID generated by ShipStation and assigned to each Ship From Location
     * (formerly known as warehouse).
     *
     * @returns The warehouse details.
     */
    get(warehouseId: number): Promise<WarehouseResponseItem>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/warehouses/list/)
     *
     * Retrieves a list of your Ship From Locations (formerly known as warehouses).
     *
     * **NOTE:** In the API, the endpoint is called warehouse, but the process actually affects Ship From locations in the
     * UI on the application side of operations.
     *
     * @returns A list of warehouses.
     */
    list(): Promise<ListWarehousesResponse>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/warehouses/create/)
     *
     * Adds a Ship From Location (formerly known as warehouse) to your account.
     *
     * **NOTE:** In the API, the endpoint is called warehouse, but the process actually affects Ship From locations on the
     * application side of operations.
     *
     * @param data The data for the request.
     *
     * @returns The created warehouse.
     */
    create(data: CreateWarehouseOptions): Promise<WarehouseResponseItem>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/warehouses/update/)
     *
     * Updates an existing Ship From Location (formerly known as a warehouse). This call does not currently support
     * partial updates.
     *
     * The entire resource must be provided in the body of the request. If a `returnAddress` object is not specified, your
     * `originAddress` will be used as your `returnAddress`.
     *
     * **NOTE:** In the API, the endpoint is called `warehouse`, but the process actually affects Ship From locations in
     * the UI on the application side of operations.
     *
     * @param warehouseId A unique ID generated by ShipStation and assigned to each Ship From Location
     * (formerly known as warehouse).
     *
     * @returns The updated warehouse.
     */
    update(warehouseId: number, data: UpdateWarehouseOptions): Promise<WarehouseResponseItem>;
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/warehouses/delete/)
     *
     * Removes a warehouse from ShipStation's UI and sets it to Inactive status.
     *
     * **NOTE:**
     *
     * In the API, the endpoint is called warehouse, but the process actually affects Ship From locations in the UI on the
     * application side of operations.
     *
     * This is a "soft" delete action, so the warehouse (or Ship From location) will still exist in the database, but this
     * action will set it to Inactive status.
     *
     * @param warehouseId A unique ID generated by ShipStation and assigned to each Ship From Location
     * (formerly known as warehouse).
     *
     * @returns Status of the delete operation.
     */
    delete(warehouseId: number): Promise<DeleteWarehouseResponse>;
}
