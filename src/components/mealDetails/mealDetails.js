/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

const MealDetails = ({
  category, area, ingredients, instructions,
}) => (
  <div className="w-50 card-text">
    <p className="text-b p-10">
      <span className="m-10 text-capitalize">
        Category:
      </span>
      <span className="m-10 ingredient">
        {category}
      </span>
    </p>
    <hr />
    <p className="text-b p-10">
      <span className="m-10 text-capitalize card-text">
        Area:
      </span>
      <span className="m-10 ingredient">
        {area}
      </span>
    </p>
    <hr />
    <div className="d-flex flex-w">
      <p className="text-b text-capitalize">
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
      <span className="m-10 text-capitalize">
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
