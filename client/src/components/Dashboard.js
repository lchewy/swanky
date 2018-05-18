import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderCards() {
    const { products } = this.props;
    return products.map(product => {
      const { _id, title, price, imgUrl } = product;
      return (
        <div className="col-1-of-4" key={_id}>
          <div className="product">
            <img
              height="300px"
              width="300px"
              src={`./img/${imgUrl}`}
              alt={`product-${_id}`}
            />
            <h5 className="product__title">{title}</h5>
            <div className="product__price">${price}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="section-index">
        <div className="row">{this.renderCards()}</div>
      </section>
    );
  }
}

const mstp = ({ products }) => ({ products });
export default connect(mstp, actions)(Dashboard);
