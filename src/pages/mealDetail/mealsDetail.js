import React from 'react';
import { connect } from 'react-redux';
import MealDetails from '../../components/mealDetails/mealDetails';

const MealDetail = meal => (
  <div className="container" style={{ padding: '6rem 0' }}>
    <div className="card">
      <div className="row">
        <MealDetails meal={meal} />
      </div>
    </div>
  </div>
);

const mapStateToProps = (state, props) => {
  const meal = state.meals.find(meal => meal.id === +props.match.params.id);

  return {
    meal,
  };
};

export default connect(mapStateToProps, null)(MealDetail);
