import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import authNav from "./authNav";
import NoAuthNav from "./noAuthNav";

class Header extends Component {
  state = { showModal: false };

  renderUserNav() {
    const { showModal } = this.state;
    const { auth } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return (
          <NoAuthNav
            openModal={() => this.setState({ showModal: true })}
            closeModal={() => this.setState({ showModal: false })}
            showModal={showModal}
          />
        );
      default:
        return authNav;
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
const mstp = ({ auth }) => {
  return { auth };
};

export default connect(mstp)(Header);

// return [
//   <li className="user-nav__item" key="1">
//     <button onClick={() => this.setState({ showModal: true })}>
//       Sign Up
//     </button>
//     {showModal && (
//       <Signup closeModal={() => this.setState({ showModal: false })} />
//     )}
//   </li>,
//   <li className="user-nav__item" key="2">
//     <Link className="user-nav__item--link" to="/api/signup">
//       Log In
//     </Link>
//   </li>
// ];

// [
//   <li className="user-nav__item" key="1">
//     <Link className="user-nav__item--profile" to="/profile">
//       Profile
//     </Link>
//   </li>,
//   <li className="user-nav__item" key="2">
//     <div className="user-nav__dropdown">
//       <button className="user-nav__dropbtn">
//         <i className="far fa-user" />
//       </button>
//       <div className="user-nav__dropdown-content">
//         <Link className="user-nav__dropdown-content--link" to="/">
//           USER
//         </Link>
//         <Link className="user-nav__dropdown-content--link" to="/">
//           Purchase History
//         </Link>
//         <Link className="user-nav__dropdown-content--link" to="/">
//           Logout
//         </Link>
//       </div>
//     </div>
//   </li>
// ];
