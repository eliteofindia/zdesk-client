import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { TokenService } from '../../common/service/token.service';

@Injectable()
export class ProfileGuard implements CanActivate {
  constructor(private router: Router, private tokenService: TokenService) {  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if (this.tokenService.authenticated)  {
        return true;
      } else {
        this.router.navigate(['signin']);
        return false;
      }
  }
}
