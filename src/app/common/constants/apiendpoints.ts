export class ApiEndpoints {
    public static baseAddress : string = "http://localhost:8080/";
    public static tokenUrl : string = ApiEndpoints.baseAddress + "auth"
    public static serviceUrl: string = ApiEndpoints.baseAddress + "service/all"
}
