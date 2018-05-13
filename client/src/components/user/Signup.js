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
    console.log("PROPSSSSS", this.props);
    const { closeModal, handleSubmit } = this.props;
    return (
      <Modal>
        <div className="modal">
          <button className="modal__closeBtn" onClick={closeModal}>
            &times;
          </button>
          <form className="modal__form">{this.renderFields()}
          <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>
    );
  }
}

const mstp = ({ form }) => {
  return { formValues: form.signUpForm  };
};

export default connect(mstp, actions)(
  reduxForm({ form: "signUpForm" })(withRouter(Signup))
);

// <Modal>
//   <button onClick={closeModal}>Close Modal</button>
//   <form>
//     <h1>Sign Up</h1>
//     <label htmlFor="fname">
//       <b>First Name</b>
//     </label>
//     <input name="fname" type="text" placeholder="Enter First Name" />
//     <label htmlFor="lname">
//       <b>Last Name</b>
//     </label>
//     <input name="lname" type="text" placeholder="Enter Last Name" />
//     <label htmlFor="email">Email</label>
//     <input name="email" type="text" placeholder="Enter Email" />
//     <label htmlFor="pw">
//       <b>PassWord</b>
//     </label>
//     <input type="password" placeholder="Enter Password" />

//     <button type="submit">Submit</button>
//   </form>
// </Modal>
