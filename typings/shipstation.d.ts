import { IAxiosRetryConfig } from 'axios-retry';
export declare enum RequestMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
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
    timeout?: number;
}
export default class Shipstation {
    authorizationToken: string;
    partnerKey?: string;
    private baseUrl;
    private timeout?;
    constructor(options?: IShipstationOptions);
    request: ({ url, method, useBaseUrl, data }: IShipstationRequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
}
