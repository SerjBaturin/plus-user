import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { ADD_USER_ASYNC } from "../actions/types";
import {getUsersAsync} from '../actions/getUsersAsync'

export function* addUserWatcher() {
  yield takeEvery(ADD_USER_ASYNC, addUser);
}

function* addUser(action) {
  try {
    yield axios("http://localhost:5000/users/add", {
      method: "post",
      data: action.user,
    });
    yield put(getUsersAsync())
  } catch (err) {
    yield console.log(err);
  }
}
