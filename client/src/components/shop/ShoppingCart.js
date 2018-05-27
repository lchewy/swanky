import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.fetchCart();
  }
  render() {
    return (
      <div>
        <span>Hello</span>
      </div>
    );
  }
}

const mstp = ({ cart }) => ({ cart });
export default connect(mstp, actions)(ShoppingCart);
