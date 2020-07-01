import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS, FETCH_REQUEST_FAILURE } from '../actions/index';

const loaderReducer = (state = { isLoading: false, form: '', errors: '' }, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        isLoading: true,
        errors: [],
      };
    case FETCH_REQUEST_SUCCESS:
      return {
        isLoading: false,
        errors: [],
      };
    case FETCH_REQUEST_FAILURE:
      return {
        isLoading: false,
        errors: action.response,
        form: action.form,
      };
    default:
      return state;
  }
};

export const getMeals = state => state.meals;
export const getMealsPending = state => state.pending;
export const getMealsError = state => state.error;

export default loaderReducer;
