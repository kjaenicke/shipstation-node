"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var typedi_1 = __importDefault(require("typedi"));
var Carriers_1 = require("./resources/Carriers");
var Fulfillments_1 = require("./resources/Fulfillments");
var Orders_1 = require("./resources/Orders");
var shipstation = function () {
    var orders = typedi_1.default.get(Orders_1.Orders);
    var carriers = typedi_1.default.get(Carriers_1.Carriers);
    var fulfillments = typedi_1.default.get(Fulfillments_1.Fulfillments);
    return {
        carriers: carriers,
        fulfillments: fulfillments,
        orders: orders
    };
};
exports.default = shipstation();
