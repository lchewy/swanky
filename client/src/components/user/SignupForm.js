import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import formFields from "./formFields";
import SignupFields from "./SignupFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import { validateEmails, validatePW } from "../utils/validate";
import { connect } from "react-redux";

class SignupForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name, type }) => {
      return (
        <Field
          key={name}
          type={type}
          label={label}
          name={name}
          component={SignupFields}
        />
      );
    });
  }

  render() {
    const { handleSubmit, submitSignup, val, history } = this.props;
    return (
      <form
        onSubmit={handleSubmit(() => submitSignup(val.values, history))}
        className="modal__form"
      >
        {this.renderFields()}
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mstp = ({ form, token }) => {
  return { val: form.signUpForm, token };
};

const validate = values => {
  const errors = {};
  errors.email = validateEmails(values.email || "");
  errors.password = validatePW(values.password);
  if (!values.fname) errors.fname = "Please enter your first name";
  if (!values.lname) errors.lname = "Please enter your last name";
  return errors;
};

export default connect(mstp, actions)(
  reduxForm({ validate, form: "signUpForm" })(withRouter(SignupForm))
);