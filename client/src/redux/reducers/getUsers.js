import { GET_USERS } from "../actions/types";
const initialState = [{ _id: "1", name: "", sirname: "", email: "" }];

const getUsers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    default:
      return state;
  }
};

export default getUsers;
