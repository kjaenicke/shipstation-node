import { IAxiosRetryConfig } from 'axios-retry';
export declare enum RequestMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE"
}
export interface IShipstationRequestOptions {
    url: string;
    method?: RequestMethod;
    useBaseUrl?: boolean;
    data?: any;
}
export interface IShipstationOptions {
    apiKey?: string;
    apiSecret?: string;
    partnerKey?: string;
    retry?: IAxiosRetryConfig | boolean;
}
export default class Shipstation {
    authorizationToken: string;
    partnerKey?: string;
    private baseUrl;
    constructor(options?: IShipstationOptions);
    request: ({ url, method, useBaseUrl, data }: IShipstationRequestOptions) => Promise<import("axios").AxiosResponse<any>>;
}
