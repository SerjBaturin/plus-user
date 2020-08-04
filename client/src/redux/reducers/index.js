import { combineReducers } from "redux";
import getUsers from "./getUsers";
/**
 * Entry point (Root Reducer) for others.
 */
export default combineReducers({
  getUsers,
});
