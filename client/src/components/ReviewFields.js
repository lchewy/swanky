import React from "react";

export default ({ input, label, type }) => {
  return (
    <div>
      <fieldset className="rate">
        <input
          className="rate__radio"
          id="rate1-star5"
          type="radio"
          name="rate1"
          value="5"
        />
        <label className="rate__label" htmlFor="rate1-star5" title="Excellent">
          5
        </label>

        <input
          className="rate__radio"
          id="rate1-star4"
          type="radio"
          name="rate1"
          value="4"
        />
        <label className="rate__label" htmlFor="rate1-star4" title="Good">
          4
        </label>

        <input
          className="rate__radio"
          id="rate1-star3"
          type="radio"
          name="rate1"
          value="3"
        />
        <label className="rate__label" htmlFor="rate1-star3" title="Satisfactory">
          3
        </label>

        <input
          className="rate__radio"
          id="rate1-star2"
          type="radio"
          name="rate1"
          value="2"
        />
        <label className="rate__label" htmlFor="rate1-star2" title="Bad">
          2
        </label>

        <input
          className="rate__radio"
          id="rate1-star1"
          type="radio"
          name="rate1"
          value="1"
        />
        <label className="rate__label" htmlFor="rate1-star1" title="Very bad">
          1
        </label>
      </fieldset>
      <fieldset>
        <input type={type} />
      </fieldset>
    </div>
  );
};
