import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import ReviewFields from "./ReviewFields";

class Reviews extends Component {
  renderFields() {
    const { handleSubmit, auth } = this.props;
    if (auth) {
      return (
        <form onSubmit={handleSubmit(() => this.submitReview())}>
          <div className="rate">
            <Field className="rate__radio" id="rating5" name="rating" component="input" type="radio" value="5"/>
            <label className="rate__label" htmlFor="rating5" />
            <Field className="rate__radio" id="rating4" name="rating" component="input" type="radio" value="4" />
            <label className="rate__label" htmlFor="rating4" />
            <Field className="rate__radio" id="rating3" name="rating" component="input" type="radio" value="3" />
            <label className="rate__label" htmlFor="rating3" />
            <Field className="rate__radio" id="rating2" name="rating" component="input" type="radio" value="2" />
            <label className="rate__label" htmlFor="rating2" />
            <Field className="rate__radio" id="rating1" name="rating" component="input" type="radio" value="1" />
            <label className="rate__label" htmlFor="rating1" />
            <Field type="text" component="textarea" name="summary" />
            <button type="submit">Submit</button>
          </div>
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
    return this.renderFields();
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

// <Field type="radio" component={ReviewFields} name="rating" value="me"/>
