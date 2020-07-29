/* eslint-disable no-underscore-dangle */
import {
  combineReducers, applyMiddleware, createStore, compose,
} from 'redux';
import thunk from 'redux-thunk';
import favouritesReducer from './favourites';
import mealsReducer from './meals';
import categoriesReducer from './categories';
import singleMealReducer from './singleMeal';

const rootReducer = combineReducers({
  meals: mealsReducer,
  favourites: favouritesReducer,
  categories: categoriesReducer,
  singleMeal: singleMealReducer,
});

const enhancers = [];
const middleware = thunk;

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(middleware),
  ...enhancers,
);

const store = createStore(rootReducer, composedEnhancers);

export default store;
