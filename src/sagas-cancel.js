import { delay } from "redux-saga";
import { fork, spawn, call, cancel } from "redux-saga/effects";

export function* rootSaga() {
  const task = yield fork(subtask);
  yield cancel(task);
}

function* subtask() {
  yield spawn(subtask2);
  console.log("This is blocked");
}

function* subtask2() {
  while (true) {
    yield call(delay, 1000);
    console.log("Subtask 2");
  }
}
