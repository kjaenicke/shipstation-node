import type { IAddress } from './Address';
import type { IAdvancedOptions } from './AdvancedOptions';
import type { IDimensions } from './Dimensions';
import type { IInsuranceOptions } from './InsuranceOptions';
import type { IInternationalOptions } from './InternationalOptions';
import type { DeliveryConfirmation } from './ShippingRateOptions';
import type { IWeight } from './Weight';
export interface ICreateLabelOptions {
    carrierCode: string;
    packageCode: null | string;
    serviceCode: null | string;
    confirmation?: DeliveryConfirmation;
    shipDate: string;
    weight: IWeight;
    dimensions?: IDimensions;
    shipFrom: IAddress;
    shipTo: IAddress;
    insuranceOptions?: IInsuranceOptions;
    internationalOptions?: IInternationalOptions;
    advancedOptions?: IAdvancedOptions;
    testLabel?: boolean;
}
