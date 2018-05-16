import React, { Component } from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./header/Header";
import * as actions from "../actions"
import {connect} from "react-redux";

class App extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return(
    <BrowserRouter>
      <Header/>
    </BrowserRouter>
    )
  }
}

export default connect(null, actions)(App);