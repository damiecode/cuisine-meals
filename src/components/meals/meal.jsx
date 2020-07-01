import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchMeals from '../../data/meals';

const Meal = ({ meal, addMealToFavourite, fetchMeals }) => {
  const imageRef = React.createRef();
  const [img] = useState(meal.strMealThumb[0]);

  const mealID = meal.idMeal;

  useEffect(() => {
    fetchMeals(mealID);
  }, [mealID], fetchMeals);

  return (
    <div className="card h-100 meal">
      <Link to={`/meals/${meal.idMeal}`} className="meal__link">
        <img
          className="card-img-top product__img"
          src={img}
          alt={meal.strMeal}
          ref={imageRef}
        />
      </Link>
      <div className="card-body meal__text">
        <h4 className="card-title meal__name">
          <Link to={`/meals/${meal.idMeal}`}>{meal.strMeal}</Link>
        </h4>
        <h5 className="meal__category">{meal.strCategory}</h5>
        <h5 className="meal__area">{meal.strArea}</h5>
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

Meal.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.number,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  addMealToFavourite: PropTypes.func.isRequired,
  fetchMeals: PropTypes.func.isRequired,
};

const MapDispatchToProps = dispatch => ({
  fetchMeals: mealID => {
    dispatch(fetchMeals(mealID));
  },
});

export default connect(null, MapDispatchToProps)(Meal);
