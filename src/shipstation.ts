import axios from 'axios'
import { Service } from 'typedi'

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
  POST = 'POST'
}

@Service()
export default class Shipstation {
  public authorizationToken: string
  private baseUrl: string = 'https://ssapi.shipstation.com'

  constructor() {
    if (!process.env.SS_API_KEY || !process.env.SS_API_SECRET) {
      // tslint:disable-next-line:no-console
      throw new Error(
        `APIKey and API Secret are required! Provided API Key: ${
          process.env.SS_API_KEY
        } API Secret: ${process.env.SS_API_SECRET}`
      )
    }

    this.authorizationToken = base64.encode(
      `${process.env.SS_API_KEY}:${process.env.SS_API_SECRET}`
    )

    // Globally define API ratelimiting
    this.request = stopcock(this.request, rateLimitOpts)
  }

  public request(url: string, method: RequestMethod) {
    return axios.request({
      headers: {
        Authorization: `Basic ${this.authorizationToken}`
      },
      method,
      url: `${this.baseUrl}/${url}`
    })
  }
}
