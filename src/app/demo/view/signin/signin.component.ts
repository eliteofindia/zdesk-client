import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  public attemptSignin(LoginDetails: NgForm) {
    console.log(LoginDetails.value);
  }
  // public category = [
  //   {name: 'Type', code: null},
  //   {name: 'Organisation', code: 'NGO'},
  //   {name: 'Volunteer', code: 'vol'}
  // ];

  public clearLoginFrom(LoginForm: NgForm){
    LoginForm.resetForm();
  }

  public handleGoogleLogin(){}
  public handleFacebookLogin(){}
  public handleTwitterLogin(){}
  public handleGitHubLogin(){}

}