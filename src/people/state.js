import {
  createReducer,
  createSetValueAction,
  setValueReducer,
  FETCH_KEY,
  NOT_IMMUTABLE
} from '../common/redux-helper'
import { Types } from '../common'

export const types = {
  SetValue: 'people/SetValue', 
  FetchPeople: 'people/FetchPeople',
  FetchUpdatePeople: 'people/FetchUpdatePeople',
  FetchPeopleHistory: 'people/FetchUserHistory',
  AddHistory : 'people/AddHistory',
  Initialize: 'people/Initialize'
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
  fetchPeopleHistory: name =>  ({ type: types.FetchPeopleHistory, name}),
  addHistory: history => ({ type: types.AddHistory, history}), 
  initialize: () => ({ type:types.Initialize, [NOT_IMMUTABLE]: true}),

}

const INITIAL_STATE = {
  people:undefined,
  peopleHistory: [],
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer,
  [types.AddHistory]: (state,action) => 
    (state.peopleHistory = [action.history, ...state.peopleHistory]),
  [types.Initialize]: () => INITIAL_STATE, 
})
  
export default reducer