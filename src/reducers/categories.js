const initialState = {
  pending: false,
  categories: [],
  error: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        pending: false,
        categories: action.categories,
      };
    case 'FETCH_REQUEST_FAILURE':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
