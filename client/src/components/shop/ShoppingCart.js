import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import _ from "lodash";

class ShoppingCart extends Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  renderCart() {
    const { products } = this.props.cart;
    return _.map(products, ({ item: { _id, title }, qty }) => {
      return (
        <li key={_id}>
          <span>
            <strong>{title}</strong>
            <p>Qty: {qty}</p>
          </span>
        </li>
      );
    });
  }

  render() {
    console.log("cart ", this.props);
    return <ul>{this.renderCart()}</ul>;
  }
}

const mstp = ({ cart }) => ({ cart });
export default connect(mstp, actions)(ShoppingCart);
