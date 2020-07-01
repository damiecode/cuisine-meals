/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import '../assets/css/App.css';
import Home from '../pages/Home/home';
import Header from './header/header';
import Footer from './footer/footer';
import MealDetail from '../pages/mealDetail/mealsDetail';
import FavouriteItems from '../pages/favourite/favourite';
import fetchMeals from '../data/meals';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    fetchMeals();
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/meal" />}
            />
            {/* <Route exact path="/meals" component={Home} /> */}
            <Route exact path="/meals:id" component={MealDetail} />
            <Route exact path="/favourites" component={FavouriteItems} />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
