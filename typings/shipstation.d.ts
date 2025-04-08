import { IAxiosRetryConfig } from 'axios-retry';
export declare const RequestMethod: {
    readonly GET: "GET";
    readonly POST: "POST";
    readonly PUT: "PUT";
    readonly DELETE: "DELETE";
};
export interface IShipstationRequestOptions {
    url: string;
    method?: keyof typeof RequestMethod;
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
    request: ({ url, method, useBaseUrl, data, }: IShipstationRequestOptions) => Promise<import("axios").AxiosResponse<any, any>>;
}
