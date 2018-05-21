import React from "react";

export default () =>{
    return(
        <div className="row">
      
        <fieldset className="rate">
          <input id="rate1-star5" type="radio" name="rate1" value="5" />
          <label htmlFor="rate1-star5" title="Excellent">5</label>
      
          <input id="rate1-star4" type="radio" name="rate1" value="4" />
          <label htmlFor="rate1-star4" title="Good">4</label>
      
          <input id="rate1-star3" type="radio" name="rate1" value="3" />
          <label htmlFor="rate1-star3" title="Satisfactory">3</label>
      
          <input id="rate1-star2" type="radio" name="rate1" value="2" />
          <label htmlFor="rate1-star2" title="Bad">2</label>
      
          <input id="rate1-star1" type="radio" name="rate1" value="1" />
          <label htmlFor="rate1-star1" title="Very bad">1</label>
        </fieldset>
        <input type="text" width="50" height="50"/>
      </div>
      
      
    )
}