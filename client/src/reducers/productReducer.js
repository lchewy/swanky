import { FETCH_PRODUCTS } from "../actions/types";

export const products = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
