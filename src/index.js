import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import { Provider } from "react-redux";
import store from "./store"
import {createStore} from 'redux'
import rootReducer from "./reducers/rootReducer";
const store2 = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store, store2}>
    <App />
  </Provider>
, document.getElementById("root"));