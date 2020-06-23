import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MealDetails from '../../components/mealDetails/mealDetails';
import MealImage from '../../components/mealImage/mealImage';

const MealDetail = meal => (
  <div className="container" style={{ padding: '6rem 0' }}>
    <div className="card">
      <div className="row">
        <MealImage images={meal.images} />
        <MealDetails product={meal} />
      </div>
    </div>
  </div>
);

MealDetail.propTypes = {
  meal: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => {
  const product = state.meals.find(meal => meal.id === +props.match.params.id);

  return {
    product,
  };
};

export default connect(mapStateToProps, null)(MealDetail);
