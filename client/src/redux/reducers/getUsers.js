import { GET_USERS } from "../actions/types";

const getUsers = (state = [], action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
};

export default getUsers;
