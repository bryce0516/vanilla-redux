import { createReducer } from "../common/redux-helper"




export const types = {
  YOON: "calendar/YOON"
}

export const actions ={
  yoonReducer: (calendar) => ({ types: types.YOON, calendar })
}

const INITIAL_STATE = { yoonYear: false }

const reducer = createReducer(INITIAL_STATE,{

})


export default reducer