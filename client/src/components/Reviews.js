import React, {Component} from "react";
import {reduxForm, Field} from "redux-form"; 
import {connect} from "react-redux";
import * as actions from "../actions";

class Reviews extends Component{
    renderField(){
        return(
            <div>
                <p>HELLO</p>
            </div>
        )
    }

    render(){
        return(
            <form>
                {this.renderFields()}
            </form>
        )
    }
}
const mstp = ()=>{};
export default connect(mstp, actions)(reduxForm({form:"reviewForm"}))(Reviews);