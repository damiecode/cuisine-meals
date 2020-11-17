import React from 'react';
import {
  Switch, Route,
} from 'react-router-dom';
import '../assets/css/App.css';
import AllCategories from '../containers/home/home';
import Header from './header/header';
import Footer from './footer/footer';
import AllMeals from '../containers/meals/allMeals';
import MealsDetail from '../containers/mealsDetails/mealsDetails';
// import FavouriteItems from '../pages/favourite/favourite';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route exact path="/" component={AllCategories} />
      <Route path="/category/:category" component={AllMeals} />
      <Route exact path="/meal/:id" component={MealsDetail} />
      {/* <Route exact path="/favourites" component={FavouriteItems} /> */}
    </Switch>
    <Footer />
  </div>
);

export default App;
