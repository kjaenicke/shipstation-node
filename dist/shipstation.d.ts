import type { AxiosRequestConfig } from 'axios';
import type { IAxiosRetryConfig } from 'axios-retry';
export interface ShipstationRequestOptions extends Pick<AxiosRequestConfig, 'data' | 'params' | 'url'> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}
export interface ShipstationOptions {
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
    constructor(options?: ShipstationOptions);
    request: <T>({ data, method, params, url }: ShipstationRequestOptions) => Promise<T>;
}
