"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMethod = exports.Models = void 0;
var Models = __importStar(require("./models"));
exports.Models = Models;
var Carriers_1 = require("./resources/Carriers");
var Fulfillments_1 = require("./resources/Fulfillments");
var Orders_1 = require("./resources/Orders");
var Shipments_1 = require("./resources/Shipments");
var Stores_1 = require("./resources/Stores");
var Warehouses_1 = require("./resources/Warehouses");
var Webhooks_1 = require("./resources/Webhooks");
var shipstation_1 = __importStar(require("./shipstation"));
Object.defineProperty(exports, "RequestMethod", { enumerable: true, get: function () { return shipstation_1.RequestMethod; } });
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
