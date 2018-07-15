import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,  } from 'rxjs/Observable';


import { ApiEndpoints } from '../../common/constants/apiendpoints';
import { JWTToken } from '../../common/model/jwttoken';
import { Credential } from '../../common/model/credential';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  public getJWTToken(credential: Credential) {
    console.log(credential);
    return this.http.post<JWTToken>(ApiEndpoints.tokenUrl, credential);
  }
}
