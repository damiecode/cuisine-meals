import { FETCH_MEALS } from '../actions/index';

const mealsReducer = (state = { }, action) => {
  switch (action.type) {
    case FETCH_MEALS:
      return {
        URL: action.URL,
        letter: action.letter,
        results: [...action.response.results],
      };
    default:
      return state;
  }
};

export default mealsReducer;
