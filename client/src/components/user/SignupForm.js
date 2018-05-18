import React, { Component } from "react";
import { reduxForm, Field, SubmissionError } from "redux-form";
import _ from "lodash";
import formFields from "./formFields";
import SignupFields from "./SignupFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import { validateEmails, validatePW } from "../utils/validate";
import { connect } from "react-redux";

class SignupForm extends Component {
  componentDidMount() {
    this.props.fetchToken();
  }

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

  submitFail() {
    const {
      // token: { messages }
      auth
    } = this.props;
    console.log("token ", this.props);
    if (!auth) {
      throw new SubmissionError({ email: "Email already in use" });
    }
    return;
  }

  render() {
    const {
      handleSubmit,
      submitSignup,
      // val,
      history,
      displayLogin,
      displaySignup
    } = this.props;
    return (
      <form
        onSubmit={handleSubmit((values) => {
          console.log("whaever ", values)
          submitSignup(values, history);
          this.submitFail();
        })}
        className="modal__form"
      >
        {this.renderFields()}
        <button type="submit">Submit</button>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => {
              displayLogin(true);
              displaySignup(false);
            }}
            style={{ cursor: "pointer" }}
          >
            <strong>Log in</strong>
          </span>
        </p>
      </form>
    );
  }
}

const mstp = ({ form, token, auth }) => {
  return { val: form.signUpForm, token, auth };
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
