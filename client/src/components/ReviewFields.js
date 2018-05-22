import React from "react";

export default (values) => {
  const{input, type } = values
  return (
    <div className="rate" >
      <input className="rate__radioa" {...input} type={type} id="star5" value="5"/>
      <label className="rate__label" htmlFor="star5"></label>

      <input className="rate__radioa" {...input} type={type} id="star4" value="4"/>
      <label className="rate__label" htmlFor="star4"></label>

      <input className="rate__radioa" {...input} type={type} id="star3" value="3"/>
      <label className="rate__label" htmlFor="star3"></label>

      <input className="rate__radioa" {...input} type={type} id="star2" value="2"/>
      <label className="rate__label" htmlFor="star2"></label>

      <input className="rate__radioa" {...input} type={type} id="star1" value="1"/>
      <label className="rate__label" htmlFor="star1"></label>
    </div>
  );
};
