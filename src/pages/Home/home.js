import React from 'react';
import { connect } from 'react-redux';
import MealList from '../../containers/mealList/mealList';
import FilterBar from '../../containers/filterBar/filterBar';

const Home = () => (
  <>
    <div className="container" style={{ paddingTop: '6rem' }}>
      <div className="row">
        {/* <FilterBar /> */}
        <MealList />
      </div>
    </div>
  </>
);

const mapStateToProps = state => ({
  meal: state.meals,
});

export default connect(mapStateToProps, null)(Home);
