import React, { Component } from "react";
import { Link } from "react-router-dom";

const auth = true;
class Header extends Component {
  renderUserNav() {
    switch (auth) {
      case null:
        return;
      case false:
        return [
          <li className="user-nav__item" key="1">
            <Link to="/api/signin">Log In</Link>
          </li>,
          <li className="user-nav__item" key="2">
            <Link to="/api/signup">Sign Up</Link>
          </li>
        ];
      default:
        return [
          <li className="user-nav__item" key="1">
            <Link className="user-nav__item--profile" to="/profile">Profile</Link>
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
                <Link className="user-nav__dropdown-content--link" to="/">
                  Logout
                </Link>
              </div>
            </div>
          </li>
        ];
    }
  }

  render() {
    return (
      <header className="header">
        <Link className="logo" to="/">
          BRAND LOGO
        </Link>
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search Items"
          />
          <button className="search__button">
            <i className="fas fa-search" />
          </button>
        </form>
        <nav className="user-nav">
          <Link to="/shopping-cart" className="user-nav__icon-box">
            <i className="fas fa-shopping-cart" />
          </Link>
          <ul>{this.renderUserNav()}</ul>
        </nav>
      </header>
    );
  }
}

export default Header;
