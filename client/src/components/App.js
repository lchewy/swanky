import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header";
import Dashboard from "./Dashboard";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
