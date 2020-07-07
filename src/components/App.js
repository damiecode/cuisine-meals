import React from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import '../assets/css/App.css';
import Home from '../pages/Home/home';
import Header from './header/header';
import Footer from './footer/footer';
import MealsDetail from '../pages/mealDetail/mealsDetail';
import FavouriteItems from '../pages/favourite/favourite';
import fetchMeals from '../data/meals';

class App extends React.Component {
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
          <div className="App">
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/meals" />}
              />
              <Route exact path="/meals" component={Home} />
              <Route exact path="/meals:id" component={MealsDetail} />
              <Route exact path="/favourites" component={FavouriteItems} />
            </Switch>
            <Footer />
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
