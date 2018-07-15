import {Component, OnInit, Inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

import {AuthService} from './service/auth.service';
import {Credential} from '../common/model/credential';
import {TokenService} from '../common/service/token.service';
import {ApiEndpoints} from '../common/constants/apiendpoints';





@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  private credential: Credential;
  public oauthFacebook: string;
  public oauthGoogle: string;
  constructor(private authService: AuthService, private router: Router, private tokenService: TokenService) {

    this.oauthFacebook = ApiEndpoints.oauthFacebook;
    this.oauthGoogle = ApiEndpoints.oauthGoogle;

  }

  ngOnInit() {
  }

  public attemptSignin(signinFrom: NgForm) {
    this.credential = this.constructTokenRequest(signinFrom.value);
    this.authService.getJWTToken(this.credential).subscribe(
      (data) => {
        this.tokenService.setToken(data.token);
        this.router.navigate(['profile']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public clearStyleOfSignIn() {
    const navItem = document.getElementById('signin');
    navItem.classList.remove('active');
  }

  private constructTokenRequest(model: any) {
    this.credential = new Credential();
    if (model.phone == '' && model.email == '') {
      this.credential.username = '';
    } else {
      if (model.phone != '') {
        this.credential.username = model.phone;
      } else {
        this.credential.username = model.email;
      }
    }
    this.credential.password = model.password;
    return this.credential;
  }

}
