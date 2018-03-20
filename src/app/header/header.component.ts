import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    let url = window.location.pathname.split('/')[1];
    console.log(url);
    switch(url){
      case "":
      case "home":{
        let navItem = document.getElementById("home");
        navItem.classList.add("active");
        break;
      }
      case "signin":{
        let navItem = document.getElementById("signin");
        navItem.classList.add("active");
        break;
      }
      case "password":{       
        break;
      }
      case "signup":{
        let navItem = document.getElementById("signup");
        navItem.classList.add("active");
        break;
      }
      case "complaint":{
        let navItem = document.getElementById("complaint");
        navItem.classList.add("active");
        break;
      }
      case "contactus":{
        let navItem = document.getElementById("contactus");
        navItem.classList.add("active");
        break;
      }
      case "profile":{
        let navItem = document.getElementById("profile");
        navItem.classList.add("active");
        break;
      }
      case "tracker":{
        let navItem = document.getElementById("tracker");
        navItem.classList.add("active");
        break;
      }
      default:{
        this.router.navigate(["error"]);
      }
    }
  }

  public collapseMenu(){
    let menuIcon = document.getElementsByClassName("show");
    if(menuIcon.length>0){
      document.getElementById("toggle").click();
    }
  }

  public makeLinkActive($event:any){
    let activeLink = document.getElementsByClassName("active");
    if(activeLink.length>0){
      activeLink[0].classList.remove("active");
    }
    $event.target.classList.add("active");
  }
}
