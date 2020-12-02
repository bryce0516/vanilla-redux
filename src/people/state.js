import {
  createReducer,
  createSetValueAction,
  setValueReducer
} from '../common/redux-helper'

export const types = {
  SetValue: 'people/SetValue',
  FetchPeople: 'people/FetchPeople'
}

export const actions = {
  setValue: createSetValueAction(types.SetValue),
  fetchPeople: name => ({ type:types.FetchPeople, name})
}

const INITIAL_STATE = {
  people:undefined,
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer
})
  
export default reducer