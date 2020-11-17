import React from 'react';
import PropTypes from 'prop-types';

const categoryFilter = ({ onChange, value }) => {
  const categories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast', 'Goat'];
  return (
    <div className="cat-filter">
      <h2>CHOOSE CATEGORY</h2>
      <select onChange={onChange} value={value} className="filter m-20">
        {categories.map(el => <option key={Math.random() * 100} value={el}>{el}</option>)}
      </select>
    </div>
  );
};

categoryFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default categoryFilter;
