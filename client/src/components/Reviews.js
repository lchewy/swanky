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

  submitReview() {
    const {
      submitReview,
      auth: { _id },
      val:{values: {rating, summary}},
      match: {params:{id}},
      history,
      location
    } = this.props;
    submitReview(id, {user:_id, rating: rating, summary: summary }, history);
  }

  render() {
    // console.log("PROPS ", this.props)
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
