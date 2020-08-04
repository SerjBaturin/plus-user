import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { GET_USERS_ASYNC } from "../actions/types";
import { getUsers } from "../actions/getUsers";

export function* getUsersWatcher() {
  yield takeEvery(GET_USERS_ASYNC, getAllUsers);
}

function* getAllUsers() {
  try {
    const users = yield axios.get("http://localhost:5000/users");
    yield put(getUsers(users.data));
  } catch (error) {
    yield console.log(error);
  }
}
