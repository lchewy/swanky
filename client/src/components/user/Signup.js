import React from "react";
import Modal from "../Modal";

const Signin = props => {
  const { closeModal } = props;
  return (
    <Modal>
      <button onClick={() => closeModal()}>Close Modal</button>
      <form>
        <h1>Sign Up</h1>
        <label htmlFor="fname">
          <b>First Name</b>
        </label>
        <input name="fname" type="text" placeholder="Enter First Name" />
        <label htmlFor="lname">
          <b>Last Name</b>
        </label>
        <input name="lname" type="text" placeholder="Enter Last Name" />
        <label htmlFor="email">Email</label>
        <input name="email" type="text" placeholder="Enter Email" />
        <label htmlFor="pw">
          <b>PassWord</b>
        </label>
        <input type="password" placeholder="Enter Password" />

        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default Signin;
