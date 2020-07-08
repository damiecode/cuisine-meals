/* eslint-disable no-underscore-dangle */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/index.css';
import App from './components/App';
import fetchMeals from './data/meals';

const initialState = {
  meals: [],
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
store.dispatch(fetchMeals());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
