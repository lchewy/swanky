import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import authNav from "./authNav";
import NoAuthNav from "./noAuthNav";
import * as actions from "../../actions";

class Header extends Component {
  renderUserNav() {
    const { auth, showModal, setModalState } = this.props;
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <NoAuthNav
            openModal={() => setModalState(true)}
            closeModal={() => setModalState(false)}
            showModal={showModal}
          />
        );
      default:
        return authNav;
    }
  }

  render() {
    const {
      cart: { totalQty }
    } = this.props;
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
            {totalQty === 0 ? <div /> : <span>{totalQty}</span>}
          </Link>
          <ul>{this.renderUserNav()}</ul>
        </nav>
      </header>
    );
  }
}
const mstp = ({ auth, showModal, cart }) => {
  return { auth, showModal, cart };
};

export default connect(mstp, actions)(Header);
