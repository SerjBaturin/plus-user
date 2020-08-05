import { TOGGLE_MODAL } from "../actions/types";

const toggleModal = (state = false, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !state;
    default:
      return state;
  }
};

export default toggleModal;
