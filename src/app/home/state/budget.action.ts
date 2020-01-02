import { Action } from '@ngrx/store';

export const GET_NEW_BUDGET = 'Get New Budget';
export const GET_BUDGET_COMPLETE = 'Get Budget Complete';
export const GET_GOAL_COMPLETE = 'Get Goal Complete';
export const CREATE_NEW_BUDGET = 'Create New Budget';
export const GET_NEW_GOAL = 'Get New Goal';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ BUDGET ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Create New Budget Data!!
export class CreateNewBudget implements Action {

  readonly type: string = CREATE_NEW_BUDGET;

  constructor(public payload: any) {
    console.log('ACTION ', CREATE_NEW_BUDGET);
  }

}

// Fetch Budget Data
export class GetNewBudget implements Action {

  readonly type: string = GET_NEW_BUDGET;

  constructor(public payload: any) {
    console.log('ACTION ', GET_NEW_BUDGET);
  }

}

// Budget Data Fetch Complete
export class GetBudgetComplete implements Action {

  readonly type: string = GET_BUDGET_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', GET_BUDGET_COMPLETE);
  }

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ GOAL ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Goal Data Fetch Complete
export class GetGoalComplete implements Action {

  readonly type: string = GET_GOAL_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION', GET_GOAL_COMPLETE);
  }

}

// Fetch Home Page Goal Data
export class GetNewGoal implements Action {

  readonly type: string = GET_NEW_GOAL;

  constructor(public payload: any) {
    console.log('ACTION ', GET_NEW_GOAL);
  }

}

export type BudgetAction = GetNewBudget | CreateNewBudget | GetBudgetComplete | GetNewGoal | GetGoalComplete;
