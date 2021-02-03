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
var Models = __importStar(require("./models"));
exports.Models = Models;
var Carriers_1 = require("./resources/Carriers");
var Fulfillments_1 = require("./resources/Fulfillments");
var Orders_1 = require("./resources/Orders");
var Shipments_1 = require("./resources/Shipments");
var Stores_1 = require("./resources/Stores");
var Warehouses_1 = require("./resources/Warehouses");
var Webhooks_1 = require("./resources/Webhooks");
var shipstation_1 = __importDefault(require("./shipstation"));
var ShipStationAPI = (function () {
    function ShipStationAPI() {
        this.ss = new shipstation_1.default();
        this.orders = new Orders_1.Orders(this.ss);
        this.carriers = new Carriers_1.Carriers(this.ss);
        this.fulfillments = new Fulfillments_1.Fulfillments(this.ss);
        this.stores = new Stores_1.Stores(this.ss);
        this.shipments = new Shipments_1.Shipments(this.ss);
        this.warehouses = new Warehouses_1.Warehouses(this.ss);
        this.webhooks = new Webhooks_1.Webhooks(this.ss);
        this.request = this.ss.request;
    }
    return ShipStationAPI;
}());
exports.default = ShipStationAPI;
