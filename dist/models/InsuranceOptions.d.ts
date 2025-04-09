export interface IInsuranceOptions {
    provider: 'shipsurance' | 'carrier' | 'provider';
    insureShipment: boolean;
    insuredValue: number;
}
