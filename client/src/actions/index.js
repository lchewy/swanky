import axios from "axios";
import { FETCH_USER, FETCH_TOKEN } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSignup = (values, history) => async dispatch => {
  const res = await axios.post("/api/signup", values);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchToken = () => async dispatch => {
  const res = await axios.get("/api/signup");
  dispatch({ type: FETCH_TOKEN, payload: res.data });
};




