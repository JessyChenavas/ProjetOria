import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';
import {AppStateService} from '../services/app-state.service';

@Injectable()
export class LoginActivate implements CanActivate {
  constructor(private appState: AppStateService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log(this.appState.isLoggedIn());
    if (!this.appState.isLoggedIn()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}
