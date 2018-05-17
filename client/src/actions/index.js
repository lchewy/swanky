import {SubmissionError} from "redux-form";
import axios from "axios";
import {
  FETCH_USER,
  FETCH_TOKEN,
  SHOW_MODAL,
  SHOW_LOGIN,
  SHOW_SIGNUP
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSignup = (values, history) => async dispatch => {
  const res = await axios.post("/api/signup", values);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitLogin = (values, history) => async dispatch => {
  const res = await axios.post("/api/signin", values);
  //history.location.pathname
  history.push("/");
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
