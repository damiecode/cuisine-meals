import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/index';

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

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
