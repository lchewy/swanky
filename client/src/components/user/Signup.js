import React, { Component } from "react";
import Modal from "../Modal";
import { reduxForm, Field } from "redux-form";
import formFields from "./formFields";
import _ from "lodash";
import SignupFields from "./SignupFields";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
import { validateEmails, validatePW } from "../utils/validate";

class Signup extends Component {
  componentDidMount() {
    const { fetchToken } = this.props;
    fetchToken();
  }

  renderFields() {
    // console.log("PROPS HERERER",this.props)
    // const {token:{messages}} = this.props
    // const {submitSucceeded} = this.props;
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
    const { closeModal, handleSubmit, val, history, submitSignup } = this.props;
    return (
      <Modal>
        <div className="modal" >
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            <form
              onSubmit={handleSubmit(() => submitSignup(val.values, history))}
              className="modal__form"
            >
              {this.renderFields()}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </Modal>
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
  reduxForm({ validate, form: "signUpForm" })(withRouter(Signup))
);
