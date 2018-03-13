import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'report', component: ComplaintComponent },
  { path: 'password', component: PasswordComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }

export const routingcomponents =[HomeComponent, Error404Component, SigninComponent, SignupComponent, ComplaintComponent, PasswordComponent];
