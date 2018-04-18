import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { CookieService } from 'ng2-cookies';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WarningComponent } from './warning/warning.component';
import { DangerComponent } from './danger/danger.component';



import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { ProgressComponent } from './progress/progress.component';
import { environment } from '../environments/environment';
import { IssuelistComponent } from './issuelist/issuelist.component';
import { SuccessComponent } from './success/success.component';
import { AuthService } from './signin/service/auth.service';
import { TokenService } from './common/service/token.service';
import { AuthGuard } from './signin/guard/auth.guard';
import { ProfileGuard } from './profile/gaurd/profile.guard';
import { DeskService } from './profile/service/desk.service';

import { tokenGetter } from './common/service/token.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ServiceWorkerModule.register('resources/ngsw-worker.js', {enabled: environment.production}),
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: 'Authorization',
        authScheme: 'Bearer',
        skipWhenExpired: true,
        whitelistedDomains: ['localhost:8080',"api.zdesk.in"],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    })
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WarningComponent,
    DangerComponent, 
    ProgressComponent, 
    IssuelistComponent,
    SuccessComponent,
    
    
    routingcomponents,         
  ],
  providers: [AuthService, TokenService, AuthGuard, ProfileGuard, DeskService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
