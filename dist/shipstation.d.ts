import type { AxiosRequestConfig } from 'axios';
import type { IAxiosRetryConfig } from 'axios-retry';
export interface ShipStationRequestOptions extends Pick<AxiosRequestConfig, 'data' | 'params' | 'url'> {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
}
export interface ShipStationOptions {
    apiKey?: string;
    apiSecret?: string;
    partnerKey?: string;
    retry?: IAxiosRetryConfig | boolean;
    timeout?: number;
}
export default class ShipStation {
    authorizationToken: string;
    partnerKey?: string;
    private readonly timeout?;
    constructor(options?: ShipStationOptions);
    request: <T>({ data, method, params, url }: ShipStationRequestOptions) => Promise<T>;
}
