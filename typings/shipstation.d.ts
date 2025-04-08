import type { AxiosRequestConfig } from 'axios';
import type { IAxiosRetryConfig } from 'axios-retry';
export interface IShipstationRequestOptions extends Pick<AxiosRequestConfig, 'data' | 'params' | 'url'> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
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
    private readonly timeout?;
    protected readonly baseUrl: string;
    constructor(options?: IShipstationOptions);
    request: <T>({ data, method, params, url }: IShipstationRequestOptions) => Promise<T>;
}
