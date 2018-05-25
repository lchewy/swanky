import { combineReducers } from "redux";
import auth from "./authReducer";
import token from "./tokenReducer";
import { showModal, showLogin, showSignup } from "./boolReducer";
import { reducer as form } from "redux-form";
import {products, product, cart} from "./productReducer"

import emails from "./emailReducer";

export default combineReducers({
  auth,
  form,
  token,
  showModal,
  showLogin,
  showSignup,
  emails,
  products,
  product,
  cart
});
