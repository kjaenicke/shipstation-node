var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { BaseResource } from './Base';
export class Shipments extends BaseResource {
    constructor(shipstation) {
        super(shipstation, 'shipments');
        this.shipstation = shipstation;
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/shipments/list/)
     *
     * Obtains a list of shipments that match the specified criteria.
     *
     * **NOTE:**
     *
     * Only valid shipments with labels generated in ShipStation will be returned in the response. Orders that have been
     * marked as Shipped either through the UI or the API will not appear as they are considered external shipments.
     *
     * To include every shipment's associated `shipmentItems` in the response, be sure to set the `includeShipmentItems`
     * parameter to `true`.
     *
     * @param params The parameters for the request.
     *
     * @returns The list of shipments.
     */
    list(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: this.baseUrl,
                method: 'GET',
                params
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/shipments/get-rates/)
     *
     * Retrieves shipping rates for the specified shipping details.
     *
     * @param data The data for the request.
     *
     * @returns The shipping rates.
     */
    getRates(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/getrates`,
                method: 'POST',
                data
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/shipments/create-label/)
     *
     * Creates a shipping label. The `labelData` field returned in the response is a base64 encoded PDF value. You can
     * decode and save the output as a PDF file to retrieve a printable label.
     *
     * **IMOPRTANT: Active Manual Store Required**
     *
     * You must have at least one [active Manual Store](https://help.shipstation.com/hc/en-us/articles/4405471663899) on
     * your ShipStation account to create labels with this endpoint.
     *
     * If you deactivated the Manual Store your ShipStation account initially came with, you must activate one. Otherwise,
     * if you try to create labels with this endpoint, you will see a 500 error that reads,
     * “Object reference not set to an instance of an object.”
     *
     * @param data The data for the request.
     *
     * @returns The created label.
     */
    createLabel(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/createlabel`,
                method: 'POST',
                data
            });
        });
    }
    /**
     * [Official Documentation](https://www.shipstation.com/docs/api/shipments/void-label/)
     *
     * Voids the specified label by `shipmentId`.
     *
     * @param shipmentId ID of the shipment to void.
     *
     * @returns The status of voiding the label.
     */
    voidLabel(shipmentId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.shipstation.request({
                url: `${this.baseUrl}/voidlabel`,
                method: 'POST',
                data: { shipmentId }
            });
        });
    }
}
