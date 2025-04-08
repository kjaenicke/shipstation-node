import axios from 'axios';
import axiosRetry from 'axios-retry';
const stopcock = require('stopcock');
const RATE_LIMIT_OPTS = {
    limit: 40,
    interval: 1000 * 40,
};
export const RequestMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};
export default class Shipstation {
    constructor(options) {
        this.baseUrl = 'https://ssapi.shipstation.com/';
        this.request = ({ url, method = RequestMethod.GET, useBaseUrl = true, data, }) => {
            const opts = {
                headers: {
                    Authorization: `Basic ${this.authorizationToken}`,
                },
                method,
                url: `${useBaseUrl ? this.baseUrl : ''}${url}`,
            };
            if (!opts.headers) {
                opts.headers = {};
            }
            if (this.partnerKey) {
                opts.headers['x-partner'] = this.partnerKey;
            }
            if (data) {
                opts.data = data;
            }
            if (this.timeout) {
                opts.timeout = this.timeout;
            }
            return axios.request(opts);
        };
        const key = options && options.apiKey ? options.apiKey : process.env.SS_API_KEY;
        const secret = options && options.apiSecret
            ? options.apiSecret
            : process.env.SS_API_SECRET;
        this.partnerKey =
            options && options.partnerKey
                ? options.partnerKey
                : process.env.SS_PARTNER_KEY;
        if (!key || !secret) {
            throw new Error(`APIKey and API Secret are required! Provided API Key: ${key} API Secret: ${secret}`);
        }
        this.authorizationToken = Buffer.from(`${key}:${secret}`).toString('base64');
        this.request = stopcock(this.request, RATE_LIMIT_OPTS);
        if (options && options.retry) {
            axiosRetry(axios, typeof options.retry === 'boolean' ? undefined : options.retry);
        }
        if (options && options.timeout) {
            this.timeout = options.timeout;
        }
    }
}
