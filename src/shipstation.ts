import axios, { AxiosRequestConfig } from 'axios'

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
}

export default class Shipstation {
  public authorizationToken: string
  private baseUrl: string = 'https://ssapi.shipstation.com/'

  constructor(options?: IShipstationOptions) {
    const key = options?.apiKey || process.env.SS_API_KEY
    const secret = options?.apiSecret || process.env.SS_API_SECRET

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

    if (data) {
      opts.data = data
    }

    return axios.request(opts)
  }
}
