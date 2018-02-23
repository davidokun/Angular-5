import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducers';
import * as fromAuth from './store/auth.reducers';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private store: Store<fromApp.AppState>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.store.select('auth')
      .map((authState: fromAuth.State) => {
        return authState.authenticated;
    });
  }
}
