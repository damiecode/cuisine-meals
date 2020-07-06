import { combineReducers } from 'redux';
import favouritesReducer from './favourites';
import mealsReducer from './meals';
import categoryFilterReducer from './categoryFilter';
import orderByReducer from './orderByFilter';
import filterReducer from './filter';
import loaderReducer from './loader';
// import paginationReducer from './pagination';

const rootReducer = combineReducers({
  meals: mealsReducer,
  favourites: favouritesReducer,
  categoryFilter: categoryFilterReducer,
  orderBy: orderByReducer,
  filter: filterReducer,
  status: loaderReducer,
  // pagination: paginationReducer,
});

export default rootReducer;
