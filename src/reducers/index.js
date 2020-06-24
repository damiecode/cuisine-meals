import { combineReducers } from 'redux';
import item from './item';
import categoryFilterReducer from './categoryFilter';
import orderByReducer from './orderByFilter';
import filterReducer from './filter';
// import paginationReducer from './pagination';

const rootReducer = combineReducers({
  item,
  categoryFilter: categoryFilterReducer,
  orderBy: orderByReducer,
  filter: filterReducer,
  // pagination: paginationReducer,
});

export default rootReducer;
