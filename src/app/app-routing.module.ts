import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { PasswordComponent } from './password/password.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ComplainttrackerComponent } from './complainttracker/complainttracker.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'complaint', component: ComplaintComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'tracker', component: ComplainttrackerComponent },
  { path: 'tracker/:id', component: ComplainttrackerComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }

export const routingcomponents =[HomeComponent, Error404Component, SigninComponent, SignupComponent, ComplaintComponent, PasswordComponent,
                                 ContactusComponent, ComplainttrackerComponent, ProfileComponent];
