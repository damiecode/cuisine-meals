/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const MealDetails = ({
  category, area, ingredients, instructions,
}) => (
  <div className="w-50">
    <p className="text-b p-10">
      <span className="m-10 text-capitalize font-weight-bolder">
        Category:
      </span>
      <span className="m-10 ingredient">
        {category}
      </span>
    </p>
    <hr />
    <p className="text-b p-10">
      <span className="m-10 text-capitalize font-weight-bolder">
        Area:
      </span>
      <span className="m-10 ingredient">
        {area}
      </span>
    </p>
    <hr />
    <div className="d-flex flex-w w-70">
      <p className="text-b text-capitalize font-weight-bolder">
        Ingredients:
      </p>
      {ingredients.map(el => (
        <p className="m-10 mr-3 ingredient inline-block" key={Math.random() * 1000}>
          {el}
          ,
        </p>
      ))}
    </div>
    <hr />
    <p className="text-b p-10">
      <span className="m-10 text-capitalize font-weight-bolder">
        Instructions:
      </span>
      <span className="m-10 ingredient">
        {instructions}
      </span>
    </p>
  </div>
);

MealDetails.propTypes = {
  category: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(String).isRequired,
  instructions: PropTypes.string.isRequired,
};

export default MealDetails;
