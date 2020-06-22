import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './BrandFilter.scss';
import fetchCategories from '../../data/categories';
import { addCategoryToFilter, removeCategoryFromFilter } from '../../actions/index';

const CategoryFilter = props => {
  const { dispatch, categoryItemsCount } = props;
  const handleSelectBox = e => {
    const { name } = e.target;
    const value = e.target.checked;

    if (e.target.checked) {
      dispatch(addCategoryToFilter(name));
    } else {
      dispatch(removeCategoryFromFilter(name));
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h3>Categories</h3>
      </div>
      <ul className="list-group flex-row flex-wrap">
        {fetchCategories.map(category => (
          <li className="list-group-item flex-50">
            <label className="custom-checkbox text-capitalize">
              {' '}
              {category}
              {' '}
              (
              {categoryItemsCount[fetchCategories]}
              )
              <input
                type="checkbox"
                name={brand}
                className="custom-checkbox__input"
                onInput={handleSelectBox}
              />
              <span className="custom-checkbox__span" />
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

CategoryFilter.propTypes = {
  categoryItemsCount: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const categoryItemsCount = {};

  state.categories.forEach(p => {
    categoryItemsCount[p.category] = categoryItemsCount[p.category] + 1 || 1;
  });

  return {
    categoryItemsCount,
  };
};

export default connect(mapStateToProps)(CategoryFilter);
