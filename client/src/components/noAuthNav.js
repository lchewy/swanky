import React from "react";
import Signup from "./user/Signup";
import { Link } from "react-router-dom";

const noAuthNav = ({ openModal, closeModal, showModal }) => {
  return [
    <li className="user-nav__item" key="1">
      <button onClick={openModal}>Sign Up</button>
      {showModal && <Signup closeModal={closeModal} />}
    </li>,
    <li className="user-nav__item" key="2">
      <Link className="user-nav__item--link" to="/api/signup">
        Log In
      </Link>
    </li>
  ];
};

export default noAuthNav;
