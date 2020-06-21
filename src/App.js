import React, { Component } from 'react';
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import './assets/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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
              render={() => <Redirect to="/meals" />}
            />
            <Route exact path="/meals" />
            <Route exact path="/meals/:id" />
            <Route exact patr="/favourites" />
          </Switch>
          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
