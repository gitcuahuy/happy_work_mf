import { createReducer, on } from '@ngrx/store';
import {UserActions} from "../action/index.action";
import {User} from "../models/user.model";

export const userFeatureKey = 'user';

export class UserStateModel {
  users: User[] = [];
}

const initialState: UserStateModel = {
  users: [],
};

export const reducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => ({
    users: [...state.users, user],
  })),
  on(UserActions.removeUser, (state, { user }) => ({
    users: state.users.filter(u => !(u.email === user.email && u.fullName === user.fullName)),
  })),
);

export const selectUsers = (state: UserStateModel) => state.users;
