import type { ListUsersOptions, ListUsersResponse } from '../types';
import type ShipStation from '../shipstation';
import { BaseResource } from './Base';

export class Users extends BaseResource {
  constructor(protected override shipstation: ShipStation) {
    super(shipstation, 'users');
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/users/list/)
   *
   * @returns A list of users.
   */
  public async list(params: ListUsersOptions): Promise<ListUsersResponse> {
    return this.shipstation.request<ListUsersResponse>({
      url: this.baseUrl,
      method: 'GET',
      params
    });
  }
}
