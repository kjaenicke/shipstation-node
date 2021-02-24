"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMethod = void 0;
var axios_1 = __importDefault(require("axios"));
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
    RequestMethod["DELETE"] = "DELETE";
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
var Shipstation = (function () {
    function Shipstation() {
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
            if (data) {
                opts.data = data;
            }
            return axios_1.default.request(opts);
        };
        if (!process.env.SS_API_KEY || !process.env.SS_API_SECRET) {
            throw new Error("APIKey and API Secret are required! Provided API Key: " + process.env.SS_API_KEY + " API Secret: " + process.env.SS_API_SECRET);
        }
        this.authorizationToken = base64.encode(process.env.SS_API_KEY + ":" + process.env.SS_API_SECRET);
        this.request = stopcock(this.request, rateLimitOpts);
    }
    return Shipstation;
}());
exports.default = Shipstation;
