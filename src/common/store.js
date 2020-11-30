import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import timelineReducer from '../timeline/state'
import timelineSaga from '../timeline/saga'
import friendReducer from '../friend/state'
import calendarReducer from '../calendar/state'
import  createSageMiddleware  from 'redux-saga'
import { all } from 'redux-saga/effects'

const reducer = combineReducers({
  timeline:timelineReducer,
  friend: friendReducer,
  calendar:calendarReducer,
})

// const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__?.());
const sagaMiddleware = createSageMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

function* rootSaga() {
  yield all([timelineSaga()]);
}

sagaMiddleware.run(rootSaga)


export default store;