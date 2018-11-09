export declare enum RequestMethod {
    GET = "GET",
    POST = "POST"
}
export default class Shipstation {
    authorizationToken: string;
    private baseUrl;
    constructor();
    request(url: string, method: RequestMethod): import("axios").AxiosPromise<any>;
}
