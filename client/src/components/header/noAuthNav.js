import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import ModalClick from "../user/modalClick";
import SignupForm from "../user/SignupForm";
import LoginForm from "../user/LoginForm";
const EnhancedLogin = ModalClick(LoginForm);
const EnhancedSignup = ModalClick(SignupForm);

const noAuthNav = ({
  openModal,
  showLogin,
  showModal,
  displayLogin,
  showSignup,
  displaySignup
}) => {
  return [
    <li className="user-nav__item" key="2">
      <button
        onClick={() => {
          openModal();
          displayLogin(true);
        }}
      >
        Log In
      </button>
      {showModal && showLogin && <EnhancedLogin />}
    </li>,
    <li className="user-nav__item" key="1">
      <button
        onClick={() => {
          openModal();
          displaySignup(true);
        }}
      >
        Sign Up
      </button>
      {showModal && showSignup && <EnhancedSignup />}
    </li>
  ];
};

const mstp = ({ showLogin, showSignup }) => {
  return { showLogin, showSignup };
};

export default connect(mstp, actions)(noAuthNav);
