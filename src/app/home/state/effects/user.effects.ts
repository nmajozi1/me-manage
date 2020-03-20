import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  LOGIN,
  LOGIN_COMPLETE,
  Login,
  LoginComplete,
  REGISTER,
  Register,
  REGISTRATION_COMPLETE,
  RegistrationComplete,
} from '../actions/user.action';
import { switchMap, map, tap } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HomeService } from 'src/app/services/home.service';
import { SetGoalService } from 'src/app/services/set-goal.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { RegService } from 'src/app/services/reg.service';

@Injectable()
export class UserEffect {

  constructor(
    private action$: Actions,
    private dashboardService: DashboardService,
    private homeService: HomeService,
    private goalService: SetGoalService,
    private loginService: LoginService,
    private regService: RegService,
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

   @Effect()
  public initiateRegister = this.action$.pipe(
    ofType(REGISTER),
      switchMap((action: Register) => this.regService.userReg(action.payload).pipe(
        map(regData => new RegistrationComplete(regData))
      )
    )
  );

  @Effect({ dispatch: false })
   registrationSuccess$ = this.action$.pipe(
     ofType(REGISTRATION_COMPLETE),
     tap(() => this.router.navigate(['/'])),
   );

}
