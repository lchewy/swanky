import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import _ from "lodash";
import SignupFields from "./SignupFields";
import { connect } from "react-redux";
import * as actions from "../../actions";

class LoginForm extends Component {
  renderFields() {
    return _.filter(formFields, ({ label, name, type }) => {
      if (name === "email" || name === "password") {
        return { label, name, type };
      }
    }).map(({ label, name, type }) => {
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
    const {
      handleSubmit,
      submitLogin,
      val,
      history,
      displayLogin,
      displaySignup
    } = this.props;
    return (
      <form onSubmit={handleSubmit(() => submitLogin(val.values, history))}>
        <button>
          <a href="/api/auth/facebook">Continue with Facebook</a>
        </button>
        <button>
          <a href="/api/auth/google">Continue with Google</a>
        </button>
        {this.renderFields()}
        <button type="submit">Submit</button>
        <hr />
        <p>
          Don't have an account?{" "}
          <span
          onClick={()=>{
            displayLogin(false);
            displaySignup(true)
          }} 
          style={{ cursor: "pointer" }}>
            <strong>Sign up</strong>
          </span>
        </p>
      </form>
    );
  }
}

const mstp = ({ form }) => {
  return { val: form.loginForm };
};

export default connect(mstp, actions)(
  reduxForm({ form: "loginForm" })(withRouter(LoginForm))
);
