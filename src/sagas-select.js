import { take, fork, select, call } from "redux-saga/effects";
import { getCart } from "./selectors";
import { buyCart } from "./api";

function* checkout() {
  const cart = yield select(getCart);
  const result = yield call(buyCart, cart);
  console.log(result);
}

export function* rootSaga() {
  while (true) {
    yield take("CHECKOUT_REQUEST");
    console.log("Got checkout request");
    yield fork(checkout);
  }
}
