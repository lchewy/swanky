import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import ReviewFields from "./ReviewFields";

class Reviews extends Component {
  renderFields() {
    return <Field
        label="Review"
        type="text"
        name="review"
        component={ReviewFields}
    />;
  }

  render() {
    return <form>{this.renderFields()}</form>;
  }
}
const mstp = ({auth}) => ({auth});
export default connect(mstp, actions)(
  reduxForm({ form: "reviewForm" })(Reviews)
);
