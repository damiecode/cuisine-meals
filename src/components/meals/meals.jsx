import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meals = ({ meal, addMealToFavourite }) => {
  const imageRef = React.createRef();
  const [img] = useState(meal.images[0]);

  return (
    <div className="card h-100 meal">
      <Link to={`/meals/${meal.id}`} className="meal__link">
        <img
          className="card-img-top product__img"
          src={img}
          alt={meal.name}
          ref={imageRef}
        />
      </Link>
      <div className="card-body meal__text">
        <h4 className="card-title meal__name">
          <Link to={`/meals/${meal.id}`}>{meal.name}</Link>
        </h4>
        <h5 className="meal__category">{meal.category}</h5>
        <h5 className="meal__area">{meal.area}</h5>
        <p className="card-text product__instructions">{meal.instructions}</p>
        <button
          type="button"
          onClick={() => {
            addMealToFavourite({ ...meal });
          }}
          className="btn btn-info meal__add-to-favourites"
        >
          Add to favourites
        </button>
      </div>
    </div>
  );
};

Meals.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    instructions: PropTypes.string,
    images: PropTypes.string,
  }).isRequired,
  addMealToFavourite: PropTypes.func.isRequired,
};

export default Meals;
