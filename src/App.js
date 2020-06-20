import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import rootReducer from './reducers/index';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './assets/css/App.css';

const initialState = {
  meals: [
    {
      id: Math.floor(Math.random() * 100),
      name: 'Fried Chicken',
      category: 'Fried-Foods',
    },
    {
      id: Math.floor(Math.random() * 100),
      name: 'Meat Pie',
      category: 'Baked-Foods',
    },
    {
      id: Math.floor(Math.random() * 100),
      name: 'Moi-moi',
      category: 'Steamed-Foods',
    },
  ],
};

const store = createStore(rootReducer, initialState);

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/products" />}
              />
              <Route exact path="/products" />
              <Route exact path="/products/:id" />
              <Route exact patr="/cart" />
            </Switch>
            <Footer />
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
