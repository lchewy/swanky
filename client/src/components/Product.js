import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";

class Product extends Component {
  componentDidMount() {
    this.props.fetchProduct();
  }

  renderProduct() {
    return (
      <div className="row">
        <div className="col-1-of-2" />
      </div>
    );
  }

  render() {
    return <div />;
  }
}

const mstp = ({ product }) => ({ product });
export default connect(mstp, actions)(Product);
