import { CHANGE_FILTER } from '../actions/index';

const filterReducer = (state = 'a', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.letter;
    default:
      return state;
  }
};

export default filterReducer;
