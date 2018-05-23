import { FETCH_PRODUCTS, FETCH_PRODUCT, SUBMIT_REVIEW } from "../actions/types";

export const products = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    case SUBMIT_REVIEW:
      return action.payload;
    default:
      return state;
  }
};

export const product = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};
