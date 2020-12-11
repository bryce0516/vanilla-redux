import {
  createSetValueAction,
  setValueReducer,
  createReducer,
} from '../common/redux-helper'
import { AuthStatus } from '../people/common/constant';

export const types = {
  SetValue: 'auth/SetValue',
  FetchLogin: 'auth/FetchLogin',
  SetUser: 'auth/SetUser',
  FetchSignup: 'auth/FetchSignup',
  FetchUser: 'auth/FetchUser',
  FetchLogout: 'auth/FetchLogout',
};

export const actions = {
  setValue : createSetValueAction(types.SetValue),
  fetchLogin : (name, password) => ({
    type: types.FetchLogin,
    name,
    password
  }),
  setUser: name => ({
    type: types.SetUser,
    name
  }),
  fetchSignup: email => ({
    type: types.FetchSignup,
    email
  }),
  fetchUser: () => ({
    type:types.FetchUser
  }),
  fetchLogout: () => ({ type: types.FetchLogout})
}

const INITIAL_STATE = {
  name: '',
  status: undefined,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer,
  [types.SetUser]: (state, action) => {
    state.name = action.name;
    state.status = action.name ? AuthStatus.Login : AuthStatus.NotLogin
  },
})

export default reducer