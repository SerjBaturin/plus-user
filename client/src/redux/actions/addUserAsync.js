import { ADD_USER_ASYNC } from "./types";
export const addUserAsync = (payload) => ({
  type: ADD_USER_ASYNC,
  user: payload,
});
