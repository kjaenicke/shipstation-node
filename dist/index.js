"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
var Products_1 = require("./resources/Products");
var ShipStationAPI = (function () {
    function ShipStationAPI(options) {
        this.ss = new shipstation_1.default(options);
        this.orders = new Orders_1.Orders(this.ss);
        this.carriers = new Carriers_1.Carriers(this.ss);
        this.fulfillments = new Fulfillments_1.Fulfillments(this.ss);
        this.products = new Products_1.Products(this.ss);
        this.stores = new Stores_1.Stores(this.ss);
        this.shipments = new Shipments_1.Shipments(this.ss);
        this.warehouses = new Warehouses_1.Warehouses(this.ss);
        this.webhooks = new Webhooks_1.Webhooks(this.ss);
        this.request = this.ss.request;
    }
    return ShipStationAPI;
}());
exports.default = ShipStationAPI;
