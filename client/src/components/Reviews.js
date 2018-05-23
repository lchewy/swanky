import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import ReviewFields from "./ReviewFields";

class Reviews extends Component {
  renderReview() {
    const { handleSubmit, auth } = this.props;
    if (auth) {
      return (
        <form onSubmit={handleSubmit(() => this.submitReview())}>
          <div className="rate">
            <ReviewFields />
          </div>
          <Field type="text" component="textarea" name="summary" />
          <button type="submit">Submit</button>
        </form>
      );
    } else {
      return <div>Please sign up or log in to leave review</div>;
    }
  }

  submitReview(e) {
    console.log("hi!!", this.props.val);
  }

  render() {
    return this.renderReview();
  }
}

const mstp = ({ auth, product, form }) => ({
  auth,
  product,
  val: form.reviewForm
});

export default connect(mstp, actions)(
  reduxForm({ form: "reviewForm" })(Reviews)
);
