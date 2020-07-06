import { FETCH_MEALS } from '../actions/index';

const mealsReducer = (state = { }, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return action.response;
    default:
      return state;
  }
};

export default mealsReducer;
