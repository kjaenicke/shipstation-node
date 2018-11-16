export declare enum RequestMethod {
    GET = "GET",
    POST = "POST"
}
export interface IShipstationRequestOptions {
    url: string;
    method: RequestMethod;
    useBaseUrl?: boolean;
    data?: any;
}
export default class Shipstation {
    authorizationToken: string;
    private baseUrl;
    constructor();
    request: ({ url, method, useBaseUrl, data }: IShipstationRequestOptions) => import("axios").AxiosPromise<any>;
}
