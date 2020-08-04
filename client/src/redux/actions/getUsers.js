import { GET_USERS } from "./types";
import { useStore } from "react-redux";
export const getUsers = (payload) => ({ type: GET_USERS, users: payload });
