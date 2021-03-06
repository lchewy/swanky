import React from "react";
import { Link } from "react-router-dom";

export default [
  <li className="user-nav__item" key="1">
    <Link className="user-nav__item--profile" to="/profile">
      Profile
    </Link>
  </li>,
  <li className="user-nav__item" key="2">
    <div className="user-nav__dropdown">
      <button className="user-nav__dropbtn">
        <i className="far fa-user" />
      </button>
      <div className="user-nav__dropdown-content">
        <Link className="user-nav__dropdown-content--link" to="/">
          USER
        </Link>
        <Link className="user-nav__dropdown-content--link" to="/">
          Purchase History
        </Link>
        <a className="user-nav__dropdown-content--link" href="/api/logout">
          Logout
        </a>
      </div>
    </div>
  </li>
];
