import React, { Component } from "react";
import axios from "axios";

class Header extends Component{

  state = {
    img: ""
  }

  async componentDidMount(){
    const img = await axios.get("/api/products");
    this.setState({img: img.data});
  }

  render(){
    console.log(this.state.img)
    const {img} = this.state;
    return(
      <div>
      yo
      <hr/>
        <img src={`./img/${img}`} width="500px" height="500px" alt="something"/>
      </div>
    )
  }
}

export default Header;