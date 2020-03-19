import {
  GET_NEW_BUDGET,
  GET_GOAL_COMPLETE,
  CREATE_NEW_BUDGET,
  GET_BUDGET_COMPLETE,
  GET_NEW_GOAL,
  GET_NEW_SET_GOAL,
  SET_GOAL_COMPLETE,
  UPDATE_PAYMENT,
  UPDATE_PAYMENT_COMPLETE,
  ADD_BUDGET_LIST_ITEM,
  ADD_BUDGET_LIST_COMPLETE,
  REMOVE_BUDGET_LIST_ITEM,
  REMOVE_BUDGET_LIST_COMPLETE,
} from './budget.action';
import * as programActions from './budget.action';

export function reducer(state: any, action: programActions.BudgetAction): any {
  switch (action.type) {
    case GET_NEW_BUDGET: {
      console.log('REDUCER: ', GET_NEW_BUDGET);
      return {};
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
        dashData: action.payload
      };
    }
    case GET_NEW_GOAL: {
      console.log('REDUCER: ', GET_NEW_GOAL);
      return {
        ...state,
        dashData: action.payload
      };
    }
    case GET_NEW_SET_GOAL: {
      console.log('REDUCER: ', GET_NEW_SET_GOAL);
      return {
        ...state
      };
    }
    case SET_GOAL_COMPLETE: {
      console.log('REDUCER: ', SET_GOAL_COMPLETE);
      return {
        ...state,
        setGoalData: action.payload
      };
    }
    case UPDATE_PAYMENT: {
      console.log('REDUCER: ', UPDATE_PAYMENT);
      return {
        ...state
      };
    }
    case UPDATE_PAYMENT_COMPLETE: {
      console.log('REDUCER: ', UPDATE_PAYMENT_COMPLETE);
      return {
        ...state,
        updatedPay: action.payload
      };
    }
    case ADD_BUDGET_LIST_ITEM: {
      console.log('REDUCER: ', ADD_BUDGET_LIST_ITEM);
      return {
        ...state
      };
    }
    case ADD_BUDGET_LIST_COMPLETE: {
      console.log('REDUCER: ', ADD_BUDGET_LIST_COMPLETE);
      return {
        ...state,
        addedItem: action.payload
      };
    }
    case REMOVE_BUDGET_LIST_ITEM: {
      console.log('REDUCER: ', REMOVE_BUDGET_LIST_ITEM);
      return {
        ...state
      };
    }
    case REMOVE_BUDGET_LIST_COMPLETE: {
      console.log('REDUCER: ', REMOVE_BUDGET_LIST_COMPLETE);
      return {
        ...state,
        removedItem: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}


