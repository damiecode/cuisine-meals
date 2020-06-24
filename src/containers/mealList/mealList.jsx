/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meals from '../../components/meals/meals';
import categoryFilter from '../../pipes/categoryFilter';
import orderByFilter from '../../pipes/orderByFilter';
import Layout from '../../components/layout/layout';
import paginationPipe from '../../pipes/paginationFilter';
import LetterFilter from '../../components/orderFilter/filter';
// import Pagination from "../../components/Pagination/Pagination";

const MealList = ({ meals }) => {
  const page = {
    colValue: 'col-lg-4',
    gridValue: 3,
  };

  return (
    <div className="col-lg-9">
      <div className="row">
        {(meals).map(meal => {
          const classes = `${page.colValue} col-md-6 mb-4`;
          return (
            <div key={meal.id} className={classes}>
              <Meals key={meal.id} meal={meal} />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-end">
        <LetterFilter
          totalItemsCount={meals.length}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const categories = state.categoryFilter;
  const { orderBy } = state;

  const filterByCategoryArr = categoryFilter(state.meals, categories);
  const filterByOrderArr = orderByFilter(filterByCategoryArr, orderBy);

  return { meals: filterByOrderArr };
};

export default connect(mapStateToProps, null)(MealList);
