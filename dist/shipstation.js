var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import axiosRetry from 'axios-retry';
const stopcock = require('stopcock');
const RATE_LIMIT_OPTS = {
    limit: 40,
    interval: 1000 * 40
};
export default class Shipstation {
    constructor(options) {
        this.request = (_a) => __awaiter(this, [_a], void 0, function* ({ data, method = 'GET', params, url }) {
            const response = yield axios.request({
                baseURL: 'https://ssapi.shipstation.com/',
                headers: Object.assign({ Authorization: `Basic ${this.authorizationToken}` }, (this.partnerKey ? { 'x-partner': this.partnerKey } : {})),
                data,
                method,
                params,
                timeout: this.timeout,
                url
            });
            return response.data;
        });
        const key = (options === null || options === void 0 ? void 0 : options.apiKey) ? options.apiKey : process.env.SS_API_KEY;
        const secret = (options === null || options === void 0 ? void 0 : options.apiSecret) ? options.apiSecret : process.env.SS_API_SECRET;
        this.partnerKey = (options === null || options === void 0 ? void 0 : options.partnerKey) ? options.partnerKey : process.env.SS_PARTNER_KEY;
        if (!key || !secret) {
            throw new Error(`APIKey and API Secret are required! Provided API Key: ${key} API Secret: ${secret}`);
        }
        this.authorizationToken = Buffer.from(`${key}:${secret}`).toString('base64');
        this.request = stopcock(this.request, RATE_LIMIT_OPTS);
        if (options === null || options === void 0 ? void 0 : options.retry) {
            axiosRetry(axios, typeof options.retry === 'boolean' ? undefined : options.retry);
        }
        if (options === null || options === void 0 ? void 0 : options.timeout) {
            this.timeout = options.timeout;
        }
    }
}
