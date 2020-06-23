import React from 'react';
import MealList from '../../containers/mealList/mealList';
import FilterBar from '../../containers/filterBar/filterBar';

const Home = () => (
  <>
    <div className="container" style={{ paddingTop: '6rem' }}>
      <div className="row">
        <FilterBar />
        <MealList />
      </div>
    </div>
  </>
);

export default Home;
