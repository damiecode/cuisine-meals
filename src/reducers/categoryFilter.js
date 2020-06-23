import { ADD_CATEGORY_TO_FILTER, REMOVE_CATEGORY_FROM_FILTER } from '../actions/index';

const categoryFilterReducer = (state = '', action) => {
  const reg = new RegExp(action.category, 'gi');
  switch (action.type) {
    case ADD_CATEGORY_TO_FILTER:
      return [...state, action.category];
    case REMOVE_CATEGORY_FROM_FILTER:
      return state.replace(reg, '');
    default:
      return state;
  }
};

export default categoryFilterReducer;
