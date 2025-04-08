import { IDimensions } from "./Dimensions";
import { IWeight } from "./Weight";
export type DeliveryConfirmation = 'none' | 'delivery' | 'signature' | 'adult_signature' | 'direct_signature';
export interface IShippingRateOptions {
    carrierCode: string;
    serviceCode?: null | string;
    packageCode?: null | string;
    fromPostalCode: string;
    toState?: null | string;
    toCountry: string;
    toPostalCode: string;
    toCity?: null | string;
    weight: IWeight;
    dimensions?: null | IDimensions;
    confirmation?: DeliveryConfirmation;
    residential?: boolean;
}
