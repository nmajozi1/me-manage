import { ActionReducerMap } from '@ngrx/store';
import * as budgetStore from './home/state';

export interface AppState {
  budget: budgetStore.State;
}

export const initialState: AppState = {
  budget: budgetStore.initialState
};

export const reducers: ActionReducerMap<AppState> = {
  budget: budgetStore.reducer
};

export const effects: Array<any> = [
  budgetStore.BudgetEffect
];

export const getMyBudget = (s: AppState) => s.budget;
