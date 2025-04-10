import type ShipStation from '../shipstation';
import type { ListAccountTagsResponse, RegisterAccountOptions, RegisterAccountResponse } from '../types';
import { BaseResource } from './Base';

export class Accounts extends BaseResource {
  constructor(protected override shipstation: ShipStation) {
    super(shipstation, 'accounts');
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/accounts/create/)
   *
   * **Only Available for ShipStation Partner Accounts, see link below.**
   *
   * Creates a new ShipStation account and generates an apiKey and apiSecret to be used by the newly created account.
   *
   * **NOTE:** This endpoint does not require API key and API Secret credentials. The Authorization header can be left
   * off. Use of this specific endpoint requires approval, and is meant only for direct partners of ShipStation.
   *
   * To become a direct partner with ShipStation, or to request more information on becoming a direct partner, we
   * recommend that you
   * [contact our Partners and Integrations team](https://info.shipstation.com/become-a-partner-api-and-custom-store-integrations).
   *
   * @param data The data for the request.
   *
   * @returns The details of the newly created account.
   */
  public async register(data: RegisterAccountOptions): Promise<RegisterAccountResponse> {
    return this.shipstation.request<RegisterAccountResponse>({
      url: `${this.baseUrl}/registeraccount`,
      method: 'POST',
      data
    });
  }

  /**
   * [Official Documentation](https://www.shipstation.com/docs/api/accounts/list-tags/)
   *
   * List all tags defined for this account.
   *
   * @returns A list of tags for the account.
   */
  public async listTags(): Promise<ListAccountTagsResponse> {
    return this.shipstation.request<ListAccountTagsResponse>({
      url: `${this.baseUrl}/listtags`,
      method: 'GET'
    });
  }
}
