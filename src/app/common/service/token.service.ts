import { Injectable, EventEmitter } from '@angular/core';
import { SessionConstants } from '../constants/appconstants';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenService {

  public authenticationSet: EventEmitter<string> = new EventEmitter<string>();
  public authenticated: boolean = false;
  public jwtService: JwtHelperService = new JwtHelperService();
  constructor() {
    let token = this.getToken();
    if (token != undefined){
      this.authenticated = true;
      this.authenticationSet.emit(token);
    }
  }

  setAuthentication(){
    let token = this.getToken();
    if (token != undefined){
      this.authenticated = true;
      this.authenticationSet.emit(token);
    }
  }
  public setToken(token: string) {
    sessionStorage.setItem(SessionConstants.JWTToken, token);
    this.authenticated = true;
    this.authenticationSet.emit(token);
  }

  public getToken() {
    return sessionStorage.getItem(SessionConstants.JWTToken);
  }

  public removeToken() {
    sessionStorage.removeItem(SessionConstants.JWTToken);
    this.authenticated = false;
    this.authenticationSet.emit(this.getToken());
  }

  public decodeToken(){
    return this.jwtService.decodeToken(this.getToken());
  }

  public isTokenExpired(){
    return this.jwtService.isTokenExpired(this.getToken());
  }

  public getTokenExpiryDate(){
    return this.jwtService.getTokenExpirationDate(this.getToken());
  }

}

export function tokenGetter(){
  return sessionStorage.getItem("JWT_TOKEN");
}
