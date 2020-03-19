import { Action } from '@ngrx/store';

export const LOGIN = 'Login User';
export const LOGIN_COMPLETE = 'Login User Complete';

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


export type UserAction = Login | LoginComplete;
