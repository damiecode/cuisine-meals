import { combineReducers } from 'redux';
import storeReducer from './store';
import categoryFilterReducer from './categoryFilter';
import orderByReducer from './orderByFilter';
import filterReducer from './filter';
// import paginationReducer from './pagination';

const rootReducer = combineReducers({
  storeReducer,
  categoryFilter: categoryFilterReducer,
  orderBy: orderByReducer,
  filter: filterReducer,
  // pagination: paginationReducer,
});

export default rootReducer;
