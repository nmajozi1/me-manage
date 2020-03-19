export interface State {
  dashData: IDashData;
  budgetList: IBudgetListData;
  setGoalData: IGoalData;
}

export interface IPayload {
  dashData: IDashData;
  budgetList: IBudgetListData;
  setGoalData: IGoalData;
}

export interface IDashData {
  success: true;
  message: string;
  data: IDashDataPayload [];
}

export interface IGoalData {
  success: true;
  message: string;
  data: IGoalPayload [];
}

export interface IBudgetListData {
  success: true;
  message: string;
  data: IBudgetListPayload [];
}

export interface IDashDataPayload {
  description: string;
  path: string;
  id: string;
  name: string;
}

export interface IGoalPayload {
  payment: boolean;
  amount: string;
  username: string;
  item: string;
  id: string;
}

export interface IBudgetListPayload {
  payment: boolean;
  amount: string;
  username: string;
  item: string;
  id: string;
}

export const initialState: State = {} as State;

