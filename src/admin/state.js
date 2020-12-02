import api from '../axios/api'

import { createReducer, createSetValueAction, setValueReducer } from "../common/redux-helper"

export const types = {
  ADD: "admin/ADD"
}

export const actions = {
  addCustomer: (customer) => ({ type:types.ADD, customer})
}


const INITIAL_STATE = { customers: []}
const reducer = createReducer(INITIAL_STATE, {
  [types.ADD]: (state, action) => state.customers.push(action.customer)
})

export default reducer