const initialState = {
  pending: false,
  meals: [],
  error: '',
  category: '',
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_MEALS_SUCCESS':
      return {
        ...state,
        pending: false,
        meals: action.meals,
      };
    case 'FETCH_REQUEST_FAILURE':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'CHANGE_CATEGORY':
      return {
        ...state,
        category: action.category,
      };
    default:
      return state;
  }
};

export default mealsReducer;
