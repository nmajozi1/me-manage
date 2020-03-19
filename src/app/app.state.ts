import { ActionReducerMap } from '@ngrx/store';
import * as budgetStore from './home/state';

export interface AppState {
  budget: budgetStore.State;
  user: budgetStore.UserState;
}

export const initialState: AppState = {
  budget: budgetStore.initialState,
  user: budgetStore.initialUserState
};

export const reducers: ActionReducerMap<AppState> = {
  budget: budgetStore.reducer,
  user: budgetStore.userReducer
};

export const effects: Array<any> = [
  budgetStore.BudgetEffect,
  budgetStore.UserEffect
];

export const getMyBudget = (s: AppState) => s;
