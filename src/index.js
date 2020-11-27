import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux";
import store from "./store"
import {createStore} from 'redux'
import rootReducer from "./reducers/rootReducer";
// import commonStore from './common/store'
// import {
//   addTimeLine,
//   removeTimeLine,
//   editTimeLine,
//   increaseNextPage,
// } from './timeline/state'

// commonStore.dispatch(addTimeLine({id:1, desc:'coding is funny'}));

const store2 = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store, store2}>
    <App />
  </Provider>
, document.getElementById("root"));