import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import {Link} from "react-router-dom";

class Product extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.fetchProduct(id);
  }

  renderProduct() {
    const { product:{title, description, price, imgUrl}, match: {params:{id}} } = this.props;
    return (
      <div className="row">
        <div className="col-1-of-2">
          <img
            height="500px"
            width="500px"
            src={`../img/${imgUrl}`}
            alt="product-img"
          />
        </div>
        <div className="col-1-of-2">
          <h3>{title}</h3>
          <h5>${price}</h5>
          <hr />
          <h4>Description</h4>
          <p>{description}</p>
          <hr/>
          <button>Add to Cart</button>
        </div>
      </div>
    );
  }

  renderReviews() {
    const { reviews } = this.props.product;
    return _.map(reviews, ({ rating, summary, _id }) => {
      return (
        <div key={_id}>
          <h3>Rating</h3>
          <p>{rating}</p>
          <p>{summary}</p>
        </div>
      );
    });
  }

  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <section>
        {this.renderProduct()}
        <div>
        <Link to={`/product/reviews/${id}`}>Write a customer review</Link>
        {this.renderReviews()}
        </div>
      </section>
    );
  }
}

const mstp = ({ product }) => ({ product });
export default connect(mstp, actions)(Product);
