import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.verifyAuthentication().pipe(
      tap( authTrue => {
        if( !authTrue ) {
          this.router.navigate(['/auth/login'])
        }
      })
    )
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    return this.authService.verifyAuthentication().pipe(
      tap( authTrue => {
        if( !authTrue ) {
          this.router.navigate(['/auth/login'])
        }
      })
    )
  }
}