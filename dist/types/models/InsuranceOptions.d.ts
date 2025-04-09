export interface InsuranceOptions {
    /**
     * Preferred Insurance provider.
     * The `provider` option is used to indicate that a shipment was insured by a third party other than Shipsurance,
     * XCover, ParcelGuard or the carrier. Billing for "provider" insurance is handled outside of ShipStation, and will
     * not affect the cost of processing the label.
     */
    provider: 'shipsurance' | 'carrier' | 'provider' | 'xcover' | 'parcelguard';
    /** Indicates whether shipment should be insured. */
    insureShipment: boolean;
    /** Value to insure. */
    insuredValue: number;
}
