import { all, fork } from "redux-saga/effects";
import { getUsersWatcher } from "./getUsersWatcher";
import { addUserWatcher } from "./addUserWatcher";

/**
 * Multiple sagas Root generator.
 *
 * @returns {array} arrays of sagas
 */
export default function* rootSaga() {
  yield all([fork(getUsersWatcher), fork(addUserWatcher)]);
}
