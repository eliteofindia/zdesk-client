import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {Router, NavigationStart} from '@angular/router';

import 'rxjs/add/operator/filter';
import {TokenService} from '../common/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public authenticated = false;

  constructor(private router: Router, private tokenService: TokenService, private uiChangeRef: ChangeDetectorRef) {
    this.authenticated = this.tokenService.authenticated;
  }

  ngOnInit() {
    if (this.tokenService.getToken() != null) {
      const tokenExpired = this.tokenService.isTokenExpired();
      if (tokenExpired) {
        this.logout();
      } else {
        this.authenticated = this.tokenService.authenticated;
      }
      this.tokenService.authenticationSet.subscribe(
        (token) => {
          this.authenticated = this.tokenService.authenticated;
          this.uiChangeRef.detectChanges();
        }
      );
    }

    // this.router.events
    // .filter(event => event instanceof NavigationStart)
    // .subscribe((event:NavigationStart) => {
    //   let activeLink = document.getElementsByClassName("active");
    //   if(activeLink.length>0){
    //     activeLink[0].classList.remove("active");
    //   }
    //   let url = event.url.split('/')[1];
    //   switch(url){
    //   case "":
    //   case "home":{
    //     let navItem = document.getElementById("home");
    //     navItem.classList.add("active");
    //     break;
    //   }
    //   case "signin":{
    //     let navItem = document.getElementById("signin");
    //     navItem.classList.add("active");
    //     break;
    //   }
    //   case "password":{
    //     break;
    //   }
    //   case "signup":{
    //     let navItem = document.getElementById("signup");
    //     navItem.classList.add("active");
    //     break;
    //   }
    //   case "complaint":{
    //     let navItem = document.getElementById("complaint");
    //     navItem.classList.add("active");
    //     break;
    //   }
    //   case "contactus":{
    //     let navItem = document.getElementById("contactus");
    //     navItem.classList.add("active");
    //     break;
    //   }
    //   case "profile":{
    //     let navItem = document.getElementById("profile");
    //     navItem.classList.add("active");
    //     break;
    //   }
    //   case "tracker":{
    //     let navItem = document.getElementById("tracker");
    //     navItem.classList.add("active");
    //     break;
    //   }
    //   default:{
    //     this.router.navigate(["error"]);
    //   }
    // }
    // });
  }

  public collapseMenu() {
    const menuIcon = document.getElementsByClassName('show');
    if (menuIcon.length > 0) {
      document.getElementById('toggle').click();
    }
  }

  public logout() {
    this.authenticated = false;
    this.tokenService.removeToken();
  }

}
