import {Action, createAction, props} from '@ngrx/store';
import {User, UserState} from "../models/user.model";

export const addUser = createAction('[User] Add User', props<{ user: UserState }>());
export const removeUser = createAction('[User] Remove User', props<{ user: UserState }>());
export const resetUser = createAction('[User] Reset User');
export enum UserActionType {
  addUser = '[User] Add User',
  removeUser = '[User] Remove User',
  Reset = '[Counter Component] Reset',
}
