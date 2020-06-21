import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Meal from '../../components/meals/meals';
import { Link } from 'react-router-dom';

const mealList = ({ meals }) => {

};

mealList.propTypes = {
  meals: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mealList);
