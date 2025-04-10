export interface RegisterAccountOptions {
  /** First Name */
  firstName: string;
  /** Last Name */
  lastName: string;
  /** Email address. This will also be the username of the account */
  email: string;
  /** Password to set for account access. */
  password: string;
  /** Name of Company. */
  companyName?: string;
  /** Company Address - Street 1 */
  addr1?: string;
  /** Company Address - Street 2 */
  addr2?: string;
  /** Company Address - City */
  city?: string;
  /** Company Address - State */
  state?: string;
  /** Company Address - Zip Code */
  zip?: string;
  /**
   * Company Address - Country. Please use a
   * [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm).
   */
  countryCode?: string;
  /** Company Phone Number */
  phone?: string;
}

export type RegisterAccountResponse =
  | {
      message: string;
      sellerId: number;
      success: true;
      apiKey: string;
      apiSecret: string;
    }
  | {
      message: string;
      sellerId: null;
      success: false;
      apiKey: null;
      apiSecret: null;
    };

export interface ListAccountTagsResponseItem {
  tagId: number;
  name: string;
  color: string;
}

export type ListAccountTagsResponse = Array<ListAccountTagsResponseItem>;
