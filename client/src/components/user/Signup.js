import React, { Component } from "react";
import Modal from "../Modal";
import { reduxForm, Field } from "redux-form";
import formFields from "./formFields";
import _ from "lodash";
import SignupFields from "./SignupFields";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

class Signup extends Component {
  componentDidMount() {}

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
    const { closeModal, handleSubmit, val, history, submitSignup } = this.props;
    return (
      <Modal>
        <div className="modal">
          <button className="modal__closeBtn" onClick={closeModal}>
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
      </Modal>
    );
  }
}

const mstp = ({ form }) => {
  return { val: form.signUpForm };
};

const validate = () => {
  const errors = {};

  return errors;
};

export default connect(mstp, actions)(
  reduxForm({ validate, form: "signUpForm" })(withRouter(Signup))
);
