import React, { Component } from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import * as actions from "../../actions";

export default ComposedComponent => {
  class ModalClick extends Component {
    componentDidMount() {
      document.addEventListener("mousedown", this.handleClick, false);
    }

    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClick, false);
    }

    handleClick(e) {
      const outside = e.target.getAttribute("data-outside");
      return outside === "modal_outside";
    }

    render() {
      const { setModalState, displaySignup, displayLogin } = this.props;
      return (
        <Modal>
          <div
            className="modal"
            data-outside="modal_outside"
            onClick={e => {
              if (this.handleClick(e)) {
                setModalState(false);
                displayLogin(false);
                displaySignup(false);
              }
            }}
          >
            <div className="modal__content">
              <button
                className="modal__close"
                onClick={() => setModalState(false)}
              >
                &times;
              </button>
              <ComposedComponent />
            </div>
          </div>
        </Modal>
      );
    }
  }
  return connect(null, actions)(ModalClick);
};
