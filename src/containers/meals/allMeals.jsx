import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../../components/categoryFilter/categoryFilter';
import fetchAllMeals from '../../data/meals';
import { getMealsPending } from '../../actions/meal';
import { CHANGE_CATEGORY } from '../../actions/index';
import MealsList from '../mealList/mealList';

const AllMeals = props => {
  const {
    addFilter, match, current, fetchAllMeals,
  } = props;

  const { category } = match.params;

  const changeFilter = e => {
    const newCategory = e.target.value;
    addFilter(e.target.value);
    fetchAllMeals(newCategory);
  };

  return (
    <div className="category-header">
      <div className="mt-5">
        <span className="mt-5">
          <CategoryFilter onChange={changeFilter} value={current} />
        </span>
        <h1 className="text-center">
          {' '}
          Showing:
          {' '}
          {current || category }
          {' '}
          {' '}
          Recipes
          {' '}
        </h1>
      </div>
      <MealsList category={category} />
    </div>
  );
};

AllMeals.defaultProps = {
  category: 'Beef',
};

AllMeals.propTypes = {
  category: PropTypes.string,
  addFilter: PropTypes.func.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = state => {
  const { meals } = state;
  return (
    {
      pending: getMealsPending(meals),
      current: meals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: CHANGE_CATEGORY,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMeals);
