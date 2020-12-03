import {
  createReducer,
  createSetValueAction,
  setValueReducer,
  FETCH_KEY
} from '../common/redux-helper'

export const types = {
  SetValue: 'people/SetValue', 
  FetchPeople: 'people/FetchPeople',
  FetchUpdatePeople: 'people/FetchUpdatePeople'
}

export const actions = { 
  setValue: createSetValueAction(types.SetValue),
  fetchPeople: name => ({ type:types.FetchPeople, name}),
  fetchUpdatePeople:({people, key, value, fetchKey}) => ({
    type:types.FetchUpdatePeople,
    people,
    key,
    value,
    [FETCH_KEY]: fetchKey,
  }),
}

const INITIAL_STATE = {
  people:undefined,
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer
})
  
export default reducer