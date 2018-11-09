"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var typedi_1 = require("typedi");
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
})(RequestMethod = exports.RequestMethod || (exports.RequestMethod = {}));
var Shipstation = (function () {
    function Shipstation() {
        this.baseUrl = 'https://ssapi.shipstation.com';
        if (!process.env.SS_API_KEY || !process.env.SS_API_SECRET) {
            throw new Error("APIKey and API Secret are required! Provided API Key: " + process.env.SS_API_KEY + " API Secret: " + process.env.SS_API_SECRET);
        }
        this.authorizationToken = base64.encode(process.env.SS_API_KEY + ":" + process.env.SS_API_SECRET);
        this.request = stopcock(this.request, rateLimitOpts);
    }
    Shipstation.prototype.request = function (url, method) {
        return axios_1.default.request({
            headers: {
                Authorization: "Basic " + this.authorizationToken
            },
            method: method,
            url: this.baseUrl + "/" + url
        });
    };
    Shipstation = __decorate([
        typedi_1.Service(),
        __metadata("design:paramtypes", [])
    ], Shipstation);
    return Shipstation;
}());
exports.default = Shipstation;