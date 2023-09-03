import {createReducer, on} from '@ngrx/store';
import {UserActions} from "../action/index.action";
import {User, UserState} from "../models/user.model";

export const userFeatureKey = 'user';

export interface UserStateModel {
  users: UserState[];
}

const initialState: UserStateModel = {
  users: [{email: 'xxxx@gmail.com', fullName: 'xxx'}],
};
/**
 * ACTION
 */
export const userReducer = createReducer(initialState,
  on(UserActions.addUser, (state, {user}) => {
    return {users: [...state.users, user],}
  }),
  on(UserActions.removeUser, (state, {user}) => ({
    users: state.users.filter(u => !(u.email === user.email && u.fullName === user.fullName)),
  })),
  on(UserActions.resetUser, (state) => ({
    users: [],
  }))
)
/**
 * SELECT USER
 */

export const selectUsers = (state: UserStateModel) => state.users;

