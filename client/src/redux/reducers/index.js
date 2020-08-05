import { combineReducers } from "redux";
import getUsers from "./getUsers";
import toggleModal from "./toggleModal";
/**
 * Entry point (Root Reducer) for others.
 */
export default combineReducers({
  getUsers,
  toggleModal,
});
