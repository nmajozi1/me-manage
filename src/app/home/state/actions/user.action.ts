import { Action } from '@ngrx/store';

export const LOGIN = 'Login User';
export const LOGIN_COMPLETE = 'Login User Complete';
export const REGISTER = 'Register User';
export const REGISTRATION_COMPLETE = 'Registration Complete';

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ REGISTER ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export class Register implements Action {

  readonly type: string = REGISTER;

  constructor(public payload: any) {
    console.log('ACTION ', REGISTER);
  }

}

// Fetch Set Goal Complete Data
export class RegistrationComplete implements Action {

  readonly type: string = REGISTRATION_COMPLETE;

  constructor(public payload: any) {
    console.log('ACTION ', REGISTRATION_COMPLETE);
  }

}


export type UserAction = Login | LoginComplete;
