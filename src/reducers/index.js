import { combineReducers } from 'redux';
import mealReducer from './meals';
import categoryFilterReducer from './categoryFilter';
import orderByReducer from './orderByFilter';
import filterReducer from './filter';
import loaderReducer from './loader';
// import paginationReducer from './pagination';

const rootReducer = combineReducers({
  meals: mealReducer,
  categoryFilter: categoryFilterReducer,
  orderBy: orderByReducer,
  filter: filterReducer,
  status: loaderReducer,
  // pagination: paginationReducer,
});

export default rootReducer;
