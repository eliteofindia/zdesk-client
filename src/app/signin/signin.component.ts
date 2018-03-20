import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public attemptSignin( signinFrom : NgForm){
    console.log(signinFrom.value);
  }

  public clearStyleOfSignIn(){
    let navItem = document.getElementById("signin");
    navItem.classList.remove("active");
  }

}
