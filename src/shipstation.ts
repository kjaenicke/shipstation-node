import axios, { AxiosRequestConfig } from 'axios'
import axiosRetry, { IAxiosRetryConfig } from 'axios-retry'

// tslint:disable-next-line:no-var-requires
const base64 = require('base-64')
// tslint:disable-next-line:no-var-requires
const stopcock = require('stopcock')

const rateLimitOpts = {
  limit: 40,
  interval: 1000 * 40
}

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export interface IShipstationRequestOptions {
  url: string
  method?: RequestMethod
  useBaseUrl?: boolean
  data?: any
}

export interface IShipstationOptions {
  apiKey?: string
  apiSecret?: string
  partnerKey?: string
  retry?: IAxiosRetryConfig | boolean
  timeout?: number
}

export default class Shipstation {
  public authorizationToken: string
  public partnerKey?: string
  private baseUrl: string = 'https://ssapi.shipstation.com/'
  private timeout?: number

  constructor (options?: IShipstationOptions) {
    const key =
      options && options.apiKey ? options.apiKey : process.env.SS_API_KEY
    const secret =
      options && options.apiSecret
        ? options.apiSecret : process.env.SS_API_SECRET

    this.partnerKey =
      options && options.partnerKey
        ? options.partnerKey : process.env.SS_PARTNER_KEY

    if (!key || !secret) {
      // tslint:disable-next-line:no-console
      throw new Error(
        `APIKey and API Secret are required! Provided API Key: ${key} API Secret: ${secret}`
      )
    }

    this.authorizationToken = base64.encode(
      `${key}:${secret}`
    )

    // Globally define API ratelimiting
    this.request = stopcock(this.request, rateLimitOpts)

    // Retry failed requests
    if (options && options.retry) {
      axiosRetry(
        axios,
        typeof options.retry === 'boolean' ? undefined : options.retry
      )
    }
    if (options && options.timeout) {
      this.timeout = options.timeout
    }
  }

  public request = ({
    url,
    method = RequestMethod.GET,
    useBaseUrl = true,
    data
  }: IShipstationRequestOptions) => {
    const opts: AxiosRequestConfig = {
      headers: {
        Authorization: `Basic ${this.authorizationToken}`
      },
      method,
      url: `${useBaseUrl ? this.baseUrl : ''}${url}`
    }

    if (this.partnerKey) {
      opts.headers['x-partner'] = this.partnerKey
    }

    if (data) {
      opts.data = data
    }
    if (this.timeout){
      opts.timeout = this.timeout
    }
    return axios.request(opts)
  }
}
