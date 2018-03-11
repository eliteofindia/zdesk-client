import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Error404Component } from './error-404/error-404.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', component: Error404Component }
  ];