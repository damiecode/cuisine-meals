import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meal from '../../components/meals/meal';
import categoryFilter from '../../pipes/categoryFilter';
import orderByFilter from '../../pipes/orderByFilter';
import LetterFilter from '../../components/orderFilter/letterFilter';

const MealList = ({ meals }) => {
  const keys = Object.keys(meals);
  const filteredMeals = keys.filter(item => meals[item]);

  const page = {
    colValue: 'col-lg-4',
    gridValue: 3,
  };

  return (
    <div className="col-lg-9">
      <div className="d-flex justify-content-end">
        <LetterFilter
          totalItemsCount={filteredMeals.length}
        />
      </div>
      <div className="row">
        {meals.map(meal => {
          const classes = `${page.colValue} col-md-6 mb-4`;
          return (
            <div key={meal} className={classes}>
              <Meal key={meal} meal={meal} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

MealList.propTypes = {
  meals: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const categories = state.categoryFilter;
  const { orderBy } = state;

  const filterByCategoryArr = categoryFilter(state.meals, categories);
  const filterByOrderArr = orderByFilter(filterByCategoryArr, orderBy);
  return { meals: filterByOrderArr };
};

export default connect(mapStateToProps, null)(MealList);
