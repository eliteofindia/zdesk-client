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
import { environment } from '../environments/environment';
import { IssuelistComponent } from './issuelist/issuelist.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WarningComponent,
    DangerComponent, 
    ProgressComponent, 
    IssuelistComponent,  
    routingcomponents,        
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
