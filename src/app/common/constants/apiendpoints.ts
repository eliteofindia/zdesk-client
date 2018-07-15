export class ApiEndpoints {
  public static baseAddress = 'http://localhost:8080/';

  public static tokenUrl = 'auth';

  public static oauthFacebook = ApiEndpoints.baseAddress + 'auth/facebook?scope=public_profile';
  public static facebookDetails = ApiEndpoints.baseAddress + 'api/facebook/details';

  public static oauthGoogle = ApiEndpoints.baseAddress + 'auth/google?scope=profile email';
  public static googleDetails = ApiEndpoints.baseAddress + 'api/google/details';
}
