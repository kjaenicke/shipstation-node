import type { ProductTag } from '../models';
import type { PaginatedRequest, PaginatedResponse } from './pagination';

export interface CustomerResponseItem {
  customerId: number;
  createDate: string;
  modifyDate: string;
  name: string;
  company: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
  phone: string;
  email: string;
  addressVerified: string;
  marketplaceUsernames: Array<{
    customerUserId: number;
    customerId: number;
    createDate: string;
    modifyDate: string;
    marketplaceId: number;
    marketplace: string;
    username: string;
  }>;
  tags: Array<ProductTag>;
}

export interface ListCustomersOptions extends PaginatedRequest {
  /** Returns customers that reside in the specified `stateCode`. */
  stateCode?: string;
  /** Returns customers that reside in the specified `countryCode`. Use the
   * [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm). */
  countryCode?: string;
  /** Returns customers that purchased items from the specified `marketplaceId`. */
  marketplaceId?: number;
  /** Returns customers that have been tagged with the specified `tagId`. */
  tagId?: number;
  /** Sorts the order of the response based off the specified value. */
  sortBy?: 'Name' | 'ModifyDate' | 'CreateDate';
}

export interface ListCustomersResponse extends PaginatedResponse {
  customers: Array<CustomerResponseItem>;
}
