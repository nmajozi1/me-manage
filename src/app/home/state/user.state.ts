export interface UserState {
  userDetails: IUserDetails;
}

export interface IUserDetails {
  success: boolean;
  message: string;
  data: IData;
}

export interface IData {
  password: string;
  username: string;
  surname: string;
  email: string;
  role: string;
  name: string;
}

export const initialUserState: UserState = {userDetails: {}} as UserState;
