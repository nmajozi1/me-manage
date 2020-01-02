import { GET_NEW_BUDGET, GET_GOAL_COMPLETE, CREATE_NEW_BUDGET, GET_BUDGET_COMPLETE, GET_NEW_GOAL } from './budget.action';
import * as programActions from './budget.action';

export function reducer(state: any, action: programActions.BudgetAction): any {
  switch (action.type) {
    case GET_NEW_BUDGET: {
      console.log('REDUCER: ', GET_NEW_BUDGET);
      return {};
    }
    case CREATE_NEW_BUDGET: {
      console.log('REDUCER: ', CREATE_NEW_BUDGET);
      return {
        ...state,
        isCreated: true
      };
    }
    case GET_BUDGET_COMPLETE: {
      console.log('REDUCER: ', GET_BUDGET_COMPLETE);
      return {
        ...state,
        budgetList: action.payload
      };
    }
    case GET_GOAL_COMPLETE: {
      console.log('REDUCER: ', GET_GOAL_COMPLETE);
      return {
        ...state,
        data: action.payload
      };
    }
    case GET_NEW_GOAL: {
      console.log('REDUCER: ', GET_NEW_GOAL);
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}


