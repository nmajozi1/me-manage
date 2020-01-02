import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { GET_NEW_BUDGET, GET_NEW_GOAL, GetNewBudget, GetNewGoal, GetBudgetComplete, GetGoalComplete } from './budget.action';
import { switchMap, map } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HomeService } from 'src/app/services/home.service';

@Injectable()
export class BudgetEffect {

  constructor(private action$: Actions, private dashboardService: DashboardService, private homeService: HomeService) {}

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

}
