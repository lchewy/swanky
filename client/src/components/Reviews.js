import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import ReviewFields from "./ReviewFields";

class Reviews extends Component {
  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.props.fetchProduct(id);
  }
  renderFields() {
    const { imgUrl } = this.props.product;
    console.log("URL ", `../img/${imgUrl}`);
    return (
      <form>
        <img
          height="500px"
          width="500px"
          src={`../img/${imgUrl}`}
          alt="review_image"
        />
        <Field
          label="Review"
          type="text"
          name="review"
          component={ReviewFields}
        />
      </form>
    );
  }

  render() {
    const { auth } = this.props;
    return auth ? (
      this.renderFields()
    ) : (
      <div>Please sign up or log in to leave review</div>
    );
  }
}
const mstp = ({ auth, product }) => ({ auth, product });
export default connect(mstp, actions)(
  reduxForm({ form: "reviewForm" })(Reviews)
);
