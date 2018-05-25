import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./header/Header";
import Dashboard from "./Dashboard";
import Product from "./Product";
import Reviews from "./Reviews";
import * as actions from "../actions";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchCart();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Dashboard} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/product/reviews/:id" exact component={Reviews} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(null, actions)(App);
