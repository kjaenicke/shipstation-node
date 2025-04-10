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
// eslint-disable-next-line @typescript-eslint/no-require-imports
const stopcock = require('stopcock');
const RATE_LIMIT_OPTS = {
    limit: 40,
    interval: 1000 * 40
};
export default class ShipStation {
    constructor(options) {
        var _a, _b, _c;
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
        const key = (_a = options === null || options === void 0 ? void 0 : options.apiKey) !== null && _a !== void 0 ? _a : process.env.SHIPSTATION_API_KEY;
        const secret = (_b = options === null || options === void 0 ? void 0 : options.apiSecret) !== null && _b !== void 0 ? _b : process.env.SHIPSTATION_API_SECRET;
        this.partnerKey = (_c = options === null || options === void 0 ? void 0 : options.partnerKey) !== null && _c !== void 0 ? _c : process.env.SHIPSTATION_PARTNER_KEY;
        if (!key || !secret) {
            throw new Error(`APIKey and API Secret are required! Provided API Key: ${key} API Secret: ${secret}`);
        }
        this.authorizationToken = Buffer.from(`${key}:${secret}`).toString('base64');
        // Globally define API ratelimiting
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        this.request = stopcock(this.request, RATE_LIMIT_OPTS);
        // Retry failed requests
        if (options === null || options === void 0 ? void 0 : options.retry) {
            axiosRetry(axios, typeof options.retry === 'boolean' ? undefined : options.retry);
        }
        if (options === null || options === void 0 ? void 0 : options.timeout) {
            this.timeout = options.timeout;
        }
    }
}
