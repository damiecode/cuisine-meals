import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Meals = meal => {
  const {
    name,
    category,
    area,
    images,
    instructions,
    id,
  } = meal.meals;

  const imageRef = React.createRef();
  const [img, setImg] = useState(images[0]);
  const [aItem, setAItem] = useState(0);

  return (
    <div className="card h-100 meal">
      <Link to={`/meals/${id}`} className="meal__link">
        <img
          className="card-img-top product__img"
          src={img}
          alt={name}
          ref={imageRef}
        />
        <SlideDots len={images.length} activeItem={aItem} />
      </Link>
      <div className="card-body meal__text">
        <h4 className="card-title meal__title">
          <Link to={`/meals/${id}`}>{name}</Link>
        </h4>
        <h5 className="meal__category">{category}</h5>
        <h5 className="meal__area">{area}</h5>
        <p className="card-text product__description">{instructions}</p>
        <button
          type="button"
          onClick={() => {
            props.dispatch(addProductToCart({ ...props.product }));
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
};

export default (Meals);
