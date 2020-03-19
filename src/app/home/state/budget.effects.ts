import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {
  GET_NEW_BUDGET,
  GET_NEW_GOAL,
  GET_NEW_SET_GOAL,
  UPDATE_PAYMENT,
  ADD_BUDGET_LIST_ITEM,
  ADD_BUDGET_LIST_COMPLETE,
  GetNewBudget,
  GetNewGoal,
  GetBudgetComplete,
  GetGoalComplete,
  GetNewSetGoal,
  SetGoalComplete,
  UpdatePayment,
  UpdatePaymentComplete,
  AddBudgetListItem,
  AddBudgetListComplete,
  UPDATE_PAYMENT_COMPLETE,
  REMOVE_BUDGET_LIST_ITEM,
  RemoveBudgetListItem,
  RemoveBudgetListComplete,
  REMOVE_BUDGET_LIST_COMPLETE,
} from './budget.action';
import { switchMap, map, tap } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HomeService } from 'src/app/services/home.service';
import { SetGoalService } from 'src/app/services/set-goal.service';
import { Store } from '@ngrx/store';
import { AppState, getMyBudget } from 'src/app/app.state';

@Injectable()
export class BudgetEffect {

  constructor(
    private action$: Actions,
    private dashboardService: DashboardService,
    private homeService: HomeService,
    private goalService: SetGoalService,
    private store: Store<AppState>,
    ) {}

  @Effect()
  public initiateBudget = this.action$.pipe(
    ofType(GET_NEW_BUDGET),
      switchMap((action: GetNewBudget) => this.dashboardService.getDashboardData(action.payload).pipe(
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
      switchMap((action: GetNewSetGoal) => this.goalService.getGoals(action.payload).pipe(
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

  @Effect({ dispatch: false })
   updateSuccess$ = this.action$.pipe(
     ofType(UPDATE_PAYMENT_COMPLETE),
     tap((action: UpdatePaymentComplete) => this.store.dispatch(new GetNewBudget({username: action.payload.data.Item.username}))),
   );

  @Effect()
  public initiateAddListItem = this.action$.pipe(
    ofType(ADD_BUDGET_LIST_ITEM),
      switchMap((action: AddBudgetListItem) => this.dashboardService.addListItem(action.payload).pipe(
        map(goalData => new AddBudgetListComplete(goalData))
      )
    )
  );

  @Effect({ dispatch: false })
   addSuccess$ = this.action$.pipe(
     ofType(ADD_BUDGET_LIST_COMPLETE),
     tap((action: AddBudgetListComplete) => this.store.dispatch(new GetNewBudget({username: action.payload.data.Item.username}))),
   );

   @Effect()
  public initiateRemoveListItem = this.action$.pipe(
    ofType(REMOVE_BUDGET_LIST_ITEM),
      switchMap((action: RemoveBudgetListItem) => this.dashboardService.deleteItem(action.payload).pipe(
        map(goalData => new RemoveBudgetListComplete(goalData))
      )
    )
  );

  @Effect({ dispatch: false })
   removeSuccess$ = this.action$.pipe(
     ofType(REMOVE_BUDGET_LIST_COMPLETE),
     tap((action: RemoveBudgetListComplete) => this.store.dispatch(new GetNewBudget({username: action.payload.input.Key.username}))),
   );
}
