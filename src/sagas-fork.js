import { call, put, fork } from "redux-saga/effects";
import { fetchResource } from "./api"; // app specific
import { receiveData } from "./actions"; // app specific

export function* rootSaga() {
  yield call(fetchAll);
}

function* fetchAll() {
  yield fork(fetchData, "users");
  yield fork(fetchData, "comments");
  console.log("End of fetchAll");
}

function* fetchData(resource) {
  const data = yield call(fetchResource, resource);
  console.log(data);
  yield put(receiveData(data));
  return data;
}
