import type { ListUsersOptions, ListUsersResponse } from '../types';
import type ShipStation from '../shipstation';
import { BaseResource } from './Base';
export declare class Users extends BaseResource {
    protected shipstation: ShipStation;
    constructor(shipstation: ShipStation);
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/users/list/)
     *
     * @returns A list of users.
     */
    list(params: ListUsersOptions): Promise<ListUsersResponse>;
}
