import {
  createReducer,
  createSetValueAction,
  setValueReducer
} from '../common/redux-helper'

export const types = {
  SetValue: 'search/SetValue',
  FetchAutoComplete: 'search/FetchAutoComplete'
}

export const actions = {
  setValue: createSetValueAction(types.SetValue),
  fetchAutoComplete: keyword => ({
    type: types.FetchAutoComplete,
    keyword
  })
}


const INITIAL_STATE = {
  keyword:'',
  autoCompletes: [],
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer,
  // [types.FetchAutoComplete]: 
})

export default reducer