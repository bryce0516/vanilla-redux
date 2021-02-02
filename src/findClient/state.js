import {
  createReducer,
  createSetValueAction,
  setValueReducer,
  FETCH_PAGE,
  totalCount
} from '../common/redux-helper'

export const types = {
  SetValue: 'search/SetValue',
  FetchAutoComplete: 'search/FetchAutoComplete',
  FetchAllHistory: 'search/FetchAllHistory',
  FetchPagination: 'search/FetchPagination'
}

export const actions = {
  setValue: createSetValueAction(types.SetValue),
  fetchAutoComplete: keyword => ({
    type: types.FetchAutoComplete,
    keyword
  }),
  fetchAllHistory: () => ({ type: types.FetchAllHistory, [FETCH_PAGE]:0 }),
  fetchPagination: () => ({ type: types.FetchPagination, totalCount })
}


const INITIAL_STATE = {
  keyword:'',
  autoCompletes: [],
  history: [],
  allPage: []
}

const reducer = createReducer(INITIAL_STATE, {
  [types.SetValue]: setValueReducer,
  // [types.FetchAutoComplete]: 
})

export default reducer