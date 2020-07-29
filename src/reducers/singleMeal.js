const initialState = {
  pending: false,
  details: {},
  error: '',
};

const singleMealReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FFETCH_REQUEST_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_MEAL_SUCCESS':
      return {
        ...state,
        pending: false,
        details: action.details,
      };
    case 'FETCH_REQUEST_FAILURE':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

export default singleMealReducer;
