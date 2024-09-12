"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var axios_retry_1 = __importDefault(require("axios-retry"));
var base64 = require('base-64');
var stopcock = require('stopcock');
var rateLimitOpts = {
    limit: 40,
    interval: 1000 * 40
};
var RequestMethod;
(function (RequestMethod) {
    RequestMethod["GET"] = "GET";
    RequestMethod["POST"] = "POST";
    RequestMethod["PUT"] = "PUT";
    RequestMethod["DELETE"] = "DELETE";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
var Shipstation = (function () {
    function Shipstation(options) {
        var _this = this;
        this.baseUrl = 'https://ssapi.shipstation.com/';
        this.request = function (_a) {
            var url = _a.url, _b = _a.method, method = _b === void 0 ? RequestMethod.GET : _b, _c = _a.useBaseUrl, useBaseUrl = _c === void 0 ? true : _c, data = _a.data;
            var opts = {
                headers: {
                    Authorization: "Basic " + _this.authorizationToken
                },
                method: method,
                url: "" + (useBaseUrl ? _this.baseUrl : '') + url
            };
            if (_this.partnerKey) {
                opts.headers['x-partner'] = _this.partnerKey;
            }
            if (data) {
                opts.data = data;
            }
            if (_this.timeout) {
                opts.timeout = _this.timeout;
            }
            return axios_1.default.request(opts);
        };
        var key = options && options.apiKey ? options.apiKey : process.env.SS_API_KEY;
        var secret = options && options.apiSecret
            ? options.apiSecret : process.env.SS_API_SECRET;
        this.partnerKey =
            options && options.partnerKey
                ? options.partnerKey : process.env.SS_PARTNER_KEY;
        if (!key || !secret) {
            throw new Error("APIKey and API Secret are required! Provided API Key: " + key + " API Secret: " + secret);
        }
        this.authorizationToken = base64.encode(key + ":" + secret);
        this.request = stopcock(this.request, rateLimitOpts);
        if (options && options.retry) {
            axios_retry_1.default(axios_1.default, typeof options.retry === 'boolean' ? undefined : options.retry);
        }
        if (options && options.timeout) {
            this.timeout = options.timeout;
        }
    }
    return Shipstation;
}());
exports.default = Shipstation;
