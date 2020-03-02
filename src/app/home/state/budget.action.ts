import { Action } from '@ngrx/store';

export const GET_NEW_BUDGET = 'Get New Budget';
export const GET_BUDGET_COMPLETE = 'Get Budget Complete';
export const GET_GOAL_COMPLETE = 'Get Goal Complete';
export const CREATE_NEW_BUDGET = 'Create New Budget';
export const GET_NEW_GOAL = 'Get New Goal';
export const GET_NEW_SET_GOAL = 'Get New Set Goal';
export const SET_GOAL_COMPLETE = 'Set Goal Complete';
export const UPDATE_PAYMENT = 'Update Payment';
export const UPDATE_PAYMENT_COMPLETE = 'Update Payment Complete';
export const GET_REFRESHED_BUDGET = 'Get Refreshed Budget';
export const REFRESHED_BUDGET_COMPLETE = 'GRefreshed Budget Complete';
export const LOGIN = 'Login User';
export const LOGIN_COMPLETE = 'Login User Complete';

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

// Fetch Budget Data
export class GetRefreshedBudget implements Action {

  readonly type: string = GET_REFRESHED_BUDGET;

  constructor(public payload: any) {
    console.log('ACTION ', GET_REFRESHED_BUDGET);
  }

}

// Budget Data Fetch Complete
export class RefreshedBudgetComplete implements Action {

  readonly type: string = REFRESHED_BUDGET_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', REFRESHED_BUDGET_COMPLETE);
  }

}

// Budget Update pay
export class UpdatePayment implements Action {

  readonly type: string = UPDATE_PAYMENT;

  constructor(public payload: any) {
    console.log('ACTION ', UPDATE_PAYMENT);
  }

}

// Budget Update pay Complete
export class UpdatePaymentComplete implements Action {

  readonly type: string = UPDATE_PAYMENT_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', UPDATE_PAYMENT_COMPLETE);
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SET GOAL ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Fetch Set Goal Data
export class GetNewSetGoal implements Action {

  readonly type: string = GET_NEW_SET_GOAL;

  constructor(public payload: any) {
    console.log('ACTION ', GET_NEW_SET_GOAL);
  }

}

// Fetch Set Goal Complete Data
export class SetGoalComplete implements Action {

  readonly type: string = SET_GOAL_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', SET_GOAL_COMPLETE);
  }

}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ LOGIN ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export class Login implements Action {

  readonly type: string = LOGIN;

  constructor(public payload: any) {
    console.log('ACTION ', LOGIN);
  }

}

// Fetch Set Goal Complete Data
export class LoginComplete implements Action {

  readonly type: string = LOGIN_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', LOGIN_COMPLETE);
  }

}


export type BudgetAction =
GetNewBudget
| CreateNewBudget
| GetBudgetComplete
| GetNewGoal
| GetGoalComplete
| SetGoalComplete
| UpdatePayment
| UpdatePaymentComplete
| GetRefreshedBudget
| RefreshedBudgetComplete
| Login
| LoginComplete;
