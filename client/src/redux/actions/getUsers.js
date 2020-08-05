import { GET_USERS } from "./types";
export const getUsers = (payload) => ({ type: GET_USERS, users: payload });
