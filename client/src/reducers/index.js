import { combineReducers } from "redux";
import auth from "./authReducer";
import token from "./tokenReducer";
import { reducer as form } from "redux-form";

export default combineReducers({
  auth,
  form,
  token
});
