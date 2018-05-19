import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import Sidebar from "./sidebar/Sidebar";

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  renderCards() {
    const { products } = this.props;
    return _.chunk(products, 3).map((chunk,i) => {
      return (
        <div className="row" key={i}>
          {_.map(chunk, product => {
            const { _id, title, price, imgUrl } = product;
            return (
              <div className="col-1-of-3" key={_id}>
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
          })}
        </div>
      );
    });
  }

  render() {
    return (
      <section className="section-index">
      <div className="landing" style={{ textAlign:"center", fontSize:"40px"}}>LANDING PAGE IMAGE</div>
      <Sidebar />
      {this.renderCards()}
      </section>
    );
  }
}

const mstp = ({ products }) => ({ products });
export default connect(mstp, actions)(Dashboard);
