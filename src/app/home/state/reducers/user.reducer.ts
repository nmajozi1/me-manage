import {
  LOGIN,
  LOGIN_COMPLETE,
} from '../actions/user.action';
import * as programActions from '../actions/user.action';

export function userReducer(state: any, action: programActions.UserAction): any {
  switch (action.type) {
    case LOGIN: {
      console.log('REDUCER: ', LOGIN);
      return { };
    }
    case LOGIN_COMPLETE: {
      console.log('REDUCER: ', LOGIN_COMPLETE);
      return {
        ...state,
        userDetails: action.payload
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}


