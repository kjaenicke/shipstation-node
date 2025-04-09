export type AddressVerificationType =
  | 'Address not yet validated'
  | 'Address validated successfully'
  | 'Address validation warning'
  | 'Address validation failed';

export interface Address {
  /** Name of person. */
  name: string;
  /** Name of company. */
  company?: string;
  /** First line of address. */
  street1: string;
  /** Second line of address. */
  street2?: string;
  /** Third line of address. */
  street3?: string;
  /** City */
  city: string;
  /** State */
  state: string;
  /** Postal Code */
  postalCode: string;
  /**
   * Country Code. The [two-letter ISO Origin Country code](https://www.nationsonline.org/oneworld/country_code_list.htm) is required.
   */
  country: string;
  /** Telephone number. */
  phone?: string;
  /** Specifies whether the given address is residential. */
  residential?: boolean;
  /** Identifies whether the address has been verified by ShipStation. */
  addressVerified?: AddressVerificationType;
}
