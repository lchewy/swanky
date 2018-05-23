import axios from "axios";
import {
  FETCH_USER,
  FETCH_TOKEN,
  SHOW_MODAL,
  SHOW_LOGIN,
  SHOW_SIGNUP,
  FETCH_EMAILS,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  SUBMIT_REVIEW
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSignup = (values, history, location) => async dispatch => {
  const res = await axios.post("/api/signup", values);
  history.push(location.pathname);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitLogin = (values, history, location) => async dispatch => {
  const res = await axios.post("/api/signin", values);
  history.push(location.pathname);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchToken = () => async dispatch => {
  const res = await axios.get("/api/signup");
  dispatch({ type: FETCH_TOKEN, payload: res.data });
};

export const setModalState = bool => {
  return {
    type: SHOW_MODAL,
    payload: bool
  };
};

export const displaySignup = bool => {
  return {
    type: SHOW_SIGNUP,
    payload: bool
  };
};

export const displayLogin = bool => {
  return {
    type: SHOW_LOGIN,
    payload: bool
  };
};

export const fetchEmails = () => async dispatch => {
  const res = await axios.get("/api/users_emails");
  dispatch({ type: FETCH_EMAILS, payload: res.data });
};

export const fetchProducts = () => async dispatch => {
  const res = await axios.get("/api/products");
  dispatch({ type: FETCH_PRODUCTS, payload: res.data });
};

export const fetchProduct = id => async dispatch => {
  const res = await axios.get(`/api/product/${id}`);
  dispatch({ type: FETCH_PRODUCT, payload: res.data });
};

export const submitReview = (id, body) => async dispatch =>{
  const res = await axios.post(`/api/review/${id}`);
  dispatch({type: SUBMIT_REVIEW, payload: res.data})
}