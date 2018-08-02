import { Component } from '@angular/core';
import {AppComponent} from './app.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  constructor(public app: AppComponent, private router: Router) {}

  public navigateSignIn = function(){
    this.router.navigate(["/signin"]);
  };


  public navigateSignUp = function (){
    this.router.navigate(["/signup"]);
  };

}
