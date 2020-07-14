import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeFilter } from '../../actions/index';
import Meal from '../../components/meals/meal';
import categoryFilter from '../../pipes/categoryFilter';
import orderByFilter from '../../pipes/orderByFilter';
import LetterFilter from '../../components/letterFilter/letterFilter';

const MealList = ({ meals, filter, changeFilter }) => {
  const filterMeals = (filter !== 'a') ? meals.filter(meal => meal.letter === filter) : meals;
  const page = {
    colValue: 'col-lg-4',
    gridValue: 3,
  };

  return (
    <div className="col-lg-9">
      <div className="d-flex justify-content-end">
        <LetterFilter
          totalItemsCount={meals.length}
          changeFilter={changeFilter}
        />
      </div>
      <div className="row">
        {filterMeals.map(meal => {
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
  meals: PropTypes.array.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  meals: state.meals,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: letter => {
    dispatch(changeFilter(letter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
