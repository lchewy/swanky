import React, { Component } from "react";
import axios from "axios";

class App extends Component{
  render(){
    return(
      <div>
        HELLOOOO WORLD
      </div>
    )
  }
}

export default App;

// class App extends Component {
//   constructor() {
//     super();
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   async handleSubmit(e) {
//     e.preventDefault();
//     const res = await axios.post("/api/signup", {
//       fname: e.target.fname.value,
//       lname: e.target.lname.value,
//       email: e.target.email.value,
//       password: e.target.password.value
//     });

//     return res
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input name="fname" placeholder="first name" type="text" />
//         <input name="lname" placeholder="last name" type="text" />
//         <input name="email" placeholder="email" type="text" />
//         <input name="password" placeholder="password" type="text" />
//         <button>Submit</button>
//       </form>
//     );
//   }
// }

// export default App;
