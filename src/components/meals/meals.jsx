import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meals = ({ props, addMealToFavourite }) => {
  const {
    name,
    category,
    area,
    images,
    instructions,
    id,
  } = props.meal;

  const imageRef = React.createRef();
  const [img] = useState(images[0]);

  return (
    <div className="card h-100 meal">
      <Link to={`/meals/${id}`} className="meal__link">
        <img
          className="card-img-top product__img"
          src={img}
          alt={name}
          ref={imageRef}
        />
      </Link>
      <div className="card-body meal__text">
        <h4 className="card-title meal__name">
          <Link to={`/meals/${id}`}>{name}</Link>
        </h4>
        <h5 className="meal__category">{category}</h5>
        <h5 className="meal__area">{area}</h5>
        <p className="card-text product__instructions">{instructions}</p>
        <button
          type="button"
          onClick={() => {
            props.dispatch(addMealToFavourite({ ...props.meal }));
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

export default (Meals);
