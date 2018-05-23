import React from "react";
import { Field } from "redux-form";

export default () =>{
  return (
    <div className="rate">
      <Field className="rate__radio" id="rating5" name="rating" component="input" type="radio" value="5"/>
      <label className="rate__label" htmlFor="rating5" />
      <Field className="rate__radio" id="rating4" name="rating" component="input" type="radio" value="4" />
      <label className="rate__label" htmlFor="rating4" />
      <Field className="rate__radio" id="rating3" name="rating" component="input" type="radio" value="3" />
      <label className="rate__label" htmlFor="rating3" />
      <Field className="rate__radio" id="rating2" name="rating" component="input" type="radio" value="2" />
      <label className="rate__label" htmlFor="rating2" />
      <Field className="rate__radio" id="rating1" name="rating" component="input" type="radio" value="1" />
      <label className="rate__label" htmlFor="rating1" />
    </div>
  )
}


