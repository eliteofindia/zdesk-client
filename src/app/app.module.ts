import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WarningComponent } from './warning/warning.component';
import { DangerComponent } from './danger/danger.component';



import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { ProgressComponent } from './progress/progress.component';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
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
