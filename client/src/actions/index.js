import axios from "axios";
import { FETCH_USER, FETCH_TOKEN } from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  //   console.log("fetching user",res)
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSignup = (values, history) => async dispatch => {
  const res = await axios.post("/api/signup", values);
  history.push("/");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchToken = () => async dispatch => {
  const res = await axios.get("/api/signup");
  // console.log("fetch token", res.data)
  dispatch({ type: FETCH_TOKEN, payload: res.data });
};


