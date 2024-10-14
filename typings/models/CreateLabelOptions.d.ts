import { IAddress } from "./Address";
import { IAdvancedOptions } from "./AdvancedOptions";
import { IDimensions } from "./Dimensions";
import { IInsuranceOptions } from "./InsuranceOptions";
import { IInternationalOptions } from "./InternationalOptions";
import { DeliveryConfirmation } from "./ShippingRateOptions";
import { IWeight } from "./Weight";
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
