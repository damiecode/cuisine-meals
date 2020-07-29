import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MealPreview from '../../components/meals/meal';
import fetchMeals from '../../data/meals';
import fetchMeal from '../../data/singleMeal';
import { getMealsError, getMeals, getMealsPending } from '../../actions/meal';
import { CHANGE_CATEGORY } from '../../actions/index';
import PageLoader from '../../components/loader/loader';

const MealsList = props => {
  const {
    meals, pending, fetchMeals, category,
  } = props;

  useEffect(() => {
    fetchMeals(category);
  }, [category, fetchMeals]);

  const shouldComponentRender = () => {
    if (category === undefined || pending === true) return false;
    return true;
  };

  if (!shouldComponentRender()) { return <PageLoader />; }
  return (
    <div>
      <div className="container">
        {meals.map(el => (
          <Link to={`/meal/${el.idMeal}`} key={Math.random() * 1000}>
            <MealPreview
              src={el.strMealThumb}
              name={el.strMeal}
              id={el.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

MealsList.defaultProps = {
  meals: [''],
};

MealsList.propTypes = {
  pending: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  fetchMeals: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(String),
};

const mapStateToProps = state => {
  const { meals } = state;
  return (
    {
      error: getMealsError(meals),
      meals: getMeals(meals),
      pending: getMealsPending(meals),
      current: meals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchMeals,
  addFilter: CHANGE_CATEGORY,
  fetchMeal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MealsList);
