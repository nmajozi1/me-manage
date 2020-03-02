import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GET_NEW_BUDGET,
  GET_NEW_GOAL,
  GET_NEW_SET_GOAL,
  UPDATE_PAYMENT,
  LOGIN,
  LOGIN_COMPLETE,
  GetNewBudget,
  GetNewGoal,
  GetBudgetComplete,
  GetGoalComplete,
  GetNewSetGoal,
  SetGoalComplete,
  UpdatePayment,
  UpdatePaymentComplete,
  Login,
  LoginComplete,
} from './budget.action';
import { switchMap, map, tap } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HomeService } from 'src/app/services/home.service';
import { SetGoalService } from 'src/app/services/set-goal.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Injectable()
export class BudgetEffect {

  constructor(
    private action$: Actions,
    private dashboardService: DashboardService,
    private homeService: HomeService,
    private goalService: SetGoalService,
    private loginService: LoginService,
    private router: Router,
    ) {}

  @Effect()
  public initiateBudget = this.action$.pipe(
    ofType(GET_NEW_BUDGET),
      switchMap((action: GetNewBudget) => this.dashboardService.getDashboardData().pipe(
        map(budgetData => new GetBudgetComplete(budgetData))
      )
    )
  );

  @Effect()
  public initiateGoal = this.action$.pipe(
    ofType(GET_NEW_GOAL),
      switchMap((action: GetNewGoal) => this.homeService.getDashboard().pipe(
        map(goalData => new GetGoalComplete(goalData))
      )
    )
  );

  @Effect()
  public initiateSetGoal = this.action$.pipe(
    ofType(GET_NEW_SET_GOAL),
      switchMap((action: GetNewSetGoal) => this.goalService.getGoals().pipe(
        map(goalData => new SetGoalComplete(goalData))
      )
    )
  );

  @Effect()
  public initiateUpdatePayment = this.action$.pipe(
    ofType(UPDATE_PAYMENT),
      switchMap((action: UpdatePayment) => this.dashboardService.payedUpdate(action.payload.data).pipe(
        map(goalData => new UpdatePaymentComplete(goalData))
      )
    )
  );

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
     tap(() => this.router.navigate(['home']))
   );

}
