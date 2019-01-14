import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas-cancel";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  cart: ["Milk", "Bread", "Apples"]
};

const store = createStore(
  (state = initialState) => state,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
