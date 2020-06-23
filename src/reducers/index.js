import { combineReducers } from 'redux';
import storeReducer from './store';
import categoryFilterReducer from './categoryFilter';
import orderByReducer from './orderByFilter';
// import paginationReducer from './pagination';

const rootReducer = combineReducers({
  storeReducer,
  categoryFilter: categoryFilterReducer,
  orderBy: orderByReducer,
  // pagination: paginationReducer,
});

export default rootReducer;
