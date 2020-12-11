import {
  createReducer,
  createSetValueAction,
  setValueReducer,
  FETCH_PAGE
} from '../common/redux-helper'

export const types = {
  SetValue: 'search/SetValue',
  FetchAutoComplete: 'search/FetchAutoComplete',
  FetchAllHistory: 'search/FetchAllHistory'
}

export const actions = {
  setValue: createSetValueAction(types.SetValue),
  fetchAutoComplete: keyword => ({
    type: types.FetchAutoComplete,
    keyword
  }),
  fetchAllHistory: () => ({ type: types.FetchAllHistory, [FETCH_PAGE]:0 }),
}


const INITIAL_STATE = {
  keyword:'',
  autoCompletes: [],
  history: [],
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer,
  // [types.FetchAutoComplete]: 
})

export default reducer