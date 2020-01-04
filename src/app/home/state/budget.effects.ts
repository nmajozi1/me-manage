import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GET_NEW_BUDGET,
  GET_NEW_GOAL,
  GET_NEW_SET_GOAL,
  UPDATE_PAYMENT,
  GetNewBudget,
  GetNewGoal,
  GetBudgetComplete,
  GetGoalComplete,
  GetNewSetGoal,
  SetGoalComplete,
  UpdatePayment,
  UpdatePaymentComplete,
} from './budget.action';
import { switchMap, map } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HomeService } from 'src/app/services/home.service';
import { SetGoalService } from 'src/app/services/set-goal.service';

@Injectable()
export class BudgetEffect {

  constructor(
    private action$: Actions,
    private dashboardService: DashboardService,
    private homeService: HomeService,
    private goalService: SetGoalService
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

}
