export interface IAdvancedOptions {
    warehouseId?: number | null;
    nonMachinable?: boolean;
    saturdayDelivery?: boolean;
    containsAlcohol?: boolean;
    storeId?: number;
    customField1?: string;
    customField2?: string;
    customField3?: string;
    source?: string;
    mergedOrSplit?: boolean;
    mergedIds?: number[];
    parentId?: number;
    billToParty?: string;
    billToAccount?: string;
    billToPostalCode?: string;
    billToCountryCode?: string;
    billToMyOtherAccount?: number;
}
