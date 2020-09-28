// Angular Native
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

// Services
import { AuthService } from '../../core/auth/auth.service';

// Rxjs and Operators
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private userToken: string | null;
  public authStatus: boolean;

  constructor( private authService: AuthService, 
               private router: Router ) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {

      this.userToken = this.authService.readToken();

      if(!this.userToken) this.router.navigateByUrl('/auth/login');

      return this.authService.authenticationStatus(this.userToken)
                             .pipe(
                               tap( authStatus => {
                                  if(!authStatus) this.router.navigateByUrl('/auth/login');
                               })
                             )
                  
    
  }
  
}
