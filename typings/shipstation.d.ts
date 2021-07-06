export declare enum RequestMethod {
    GET = "GET",
    POST = "POST",
    DELETE = "DELETE"
}
export interface IShipstationRequestOptions {
    url: string;
    method?: RequestMethod;
    useBaseUrl?: boolean;
    data?: any;
}
export interface IShipstationOptions {
    apiKey?: string;
    apiSecret?: string;
}
export default class Shipstation {
    authorizationToken: string;
    private baseUrl;
    constructor(options?: IShipstationOptions);
    request: ({ url, method, useBaseUrl, data }: IShipstationRequestOptions) => Promise<import("axios").AxiosResponse<any>>;
}
