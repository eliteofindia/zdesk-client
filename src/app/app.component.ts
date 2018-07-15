import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { TokenService } from './common/service/token.service';
import { SessionConstants } from 'app/common/constants/appconstants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private tokenService: TokenService, private cookie: CookieService) {  }

  ngOnInit() {
    const token = this.cookie.get('AUTH-TOKEN');
    if (token != null && token != '') {
      this.tokenService.setToken(token);
      const decodedToken = this.tokenService.decodeToken();
      sessionStorage.setItem(SessionConstants.Provider, decodedToken.providerId);
      this.tokenService.setAuthentication();
      this.cookie.delete('AUTH-TOKEN');
    }
  }

}
