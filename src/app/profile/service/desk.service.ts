import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiEndpoints } from '../../common/constants/apiendpoints';

@Injectable()
export class DeskService {

  constructor(private http : HttpClient) { }

  public getServices(){
    return this.http.get(ApiEndpoints.serviceUrl);
  }

}
