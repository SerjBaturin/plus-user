import { all, fork } from "redux-saga/effects";
import { getUsersWatcher } from "./getUsersWatcher";

/**
 * Multiple sagas Root generator.
 *
 * @returns {array} arrays of sagas
 */
export default function* rootSaga() {
  yield all([fork(getUsersWatcher)]);
}
