import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import type { IAxiosRetryConfig } from 'axios-retry';
import axiosRetry from 'axios-retry';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const stopcock = require('stopcock');

const RATE_LIMIT_OPTS = {
  limit: 40,
  interval: 1000 * 40
};

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
  public authorizationToken: string;
  public partnerKey?: string;
  private readonly timeout?: number;

  constructor(options?: IShipstationOptions) {
    const key = options?.apiKey ? options.apiKey : process.env.SS_API_KEY;
    const secret = options?.apiSecret ? options.apiSecret : process.env.SS_API_SECRET;

    this.partnerKey = options?.partnerKey ? options.partnerKey : process.env.SS_PARTNER_KEY;

    if (!key || !secret) {
      throw new Error(`APIKey and API Secret are required! Provided API Key: ${key} API Secret: ${secret}`);
    }

    this.authorizationToken = Buffer.from(`${key}:${secret}`).toString('base64');

    // Globally define API ratelimiting
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.request = stopcock(this.request, RATE_LIMIT_OPTS);

    // Retry failed requests
    if (options?.retry) {
      axiosRetry(axios, typeof options.retry === 'boolean' ? undefined : options.retry);
    }
    if (options?.timeout) {
      this.timeout = options.timeout;
    }
  }

  public request = async <T>({ data, method = 'GET', params, url }: IShipstationRequestOptions) => {
    const response = await axios.request<T>({
      baseURL: 'https://ssapi.shipstation.com/',
      headers: {
        Authorization: `Basic ${this.authorizationToken}`,
        ...(this.partnerKey ? { 'x-partner': this.partnerKey } : {})
      },
      data,
      method,
      params,
      timeout: this.timeout,
      url
    });

    return response.data;
  };
}
