"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var Models = __importStar(require("./models"));
exports.Models = Models;
var Carriers_1 = require("./resources/Carriers");
var Fulfillments_1 = require("./resources/Fulfillments");
var Orders_1 = require("./resources/Orders");
var Stores_1 = require("./resources/Stores");
var shipstation_1 = __importDefault(require("./shipstation"));
var shipstation = function () {
    var ss = new shipstation_1.default();
    var orders = new Orders_1.Orders(ss);
    var carriers = new Carriers_1.Carriers(ss);
    var fulfillments = new Fulfillments_1.Fulfillments(ss);
    var stores = new Stores_1.Stores(ss);
    return {
        carriers: carriers,
        fulfillments: fulfillments,
        orders: orders,
        stores: stores,
        request: ss.request
    };
};
exports.default = shipstation();
