import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeskService {

  constructor(private http: HttpClient) { }

  public getProfileDetails(endPoint) {
    return this.http.get<ProfileData>(endPoint);
  }

}

class ProfileData {
  public email: string;
  public name: string;
  public picture: string;
  public given_name: string;
}

