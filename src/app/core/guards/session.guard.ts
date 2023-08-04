import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard  {

  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession();
  }

  checkCookieSession(): boolean {
    try {

      const token: boolean = this.cookieService.check('token')
      console.log('ok ok',token)
      if (!token) {
        this.router.navigate(['/', 'auth'])
      }
      return token

    } catch (e) {
      console.log('Algo sucedio ?? 🔴', e);
      return false
    }

  }
/*
  checkUserRole(): boolean {
      const userRole = this.authService.getRole();
      if (userRole != 'admin')
        return false;
      return true;
  }
*/
}