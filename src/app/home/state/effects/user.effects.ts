import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LOGIN,
  LOGIN_COMPLETE,
  Login,
  LoginComplete,
} from '../actions/user.action';
import { switchMap, map, tap } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HomeService } from 'src/app/services/home.service';
import { SetGoalService } from 'src/app/services/set-goal.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class UserEffect {

  constructor(
    private action$: Actions,
    private dashboardService: DashboardService,
    private homeService: HomeService,
    private goalService: SetGoalService,
    private loginService: LoginService,
    private router: Router,
    ) {}

  @Effect()
  public initiateLogin = this.action$.pipe(
    ofType(LOGIN),
      switchMap((action: Login) => this.loginService.login(action.payload).pipe(
        map(loginData => new LoginComplete(loginData))
      )
    )
  );

  @Effect({ dispatch: false })
   loginSuccess$ = this.action$.pipe(
     ofType(LOGIN_COMPLETE),
     tap(() => this.router.navigate(['home'])),
   );

}
