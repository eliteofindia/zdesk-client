import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WarningComponent } from './warning/warning.component';
import { DangerComponent } from './danger/danger.component';



import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { ProgressComponent } from './progress/progress.component';
import { environment } from '../environments/environment.prod';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    environment.production ? ServiceWorkerModule.register('ngsw-config.json') : [],
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WarningComponent,
    DangerComponent, 
    ProgressComponent,   
    routingcomponents        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
