import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  SUBMIT_REVIEW,
  ADD_TO_CART,
  FETCH_CART
} from "../actions/types";

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

export const cart = (state = {}, action) => {
  switch (action.type) {
    case FETCH_CART:
      return action.payload;
    case ADD_TO_CART:
      return action.payload.totalQty;
    default:
      return state;
  }
};
