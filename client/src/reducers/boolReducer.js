import { SHOW_MODAL, SHOW_LOGIN, SHOW_SIGNUP } from "../actions/types";

export const showModal = (state = false, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export const showSignup = (state = false, action) => {
  switch (action.type) {
    case SHOW_SIGNUP:
      return action.payload;
    default:
      return state;
  }
};

export const showLogin = (state = false, action) => {
  switch (action.type) {
    case SHOW_LOGIN:
      return action.payload;
    default:
      return state;
  }
};
