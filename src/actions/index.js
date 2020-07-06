// const API_GET_MEAL_LATEST = 'meal/latest';
// const API_GET_MEAL_BY = 'filter/meal';
// const API_GET_MEAL = mealID => `meal/${mealID}`;

// const FETCH_MEALS_ERROR = 'FETCH_MEAL_ERROR';
// const FETCH_MEALLIST = 'FETCH_MEALLIST';
// const FETCH_MEAL = 'FETCH_MEAL';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const FETCH_REQUEST_FAILURE = 'FETCH_REQUEST_FAILURE';

export const FETCH_MEALS = 'FETCH_MEALS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

export const fetchRequestSuccess = response => ({
  type: FETCH_REQUEST_SUCCESS,
  response,
});

export const fetchRequestFailure = (response, form = '') => ({
  type: FETCH_REQUEST_FAILURE,
  response,
  form,
});

export const fetchCategoriesSuccess = categories => ({
  type: FETCH_CATEGORIES,
  response: categories,
});

export const fetchMealsSuccess = meals => ({
  type: FETCH_MEALS,
  response: meals,
});

export const ADD_MEAL_TO_FAVOURITE = 'ADD_MEAL_TO_FAVOURITE';
export const REMOVE_MEAL_FROM_FAVOURITE = 'REMOVE_MEAL_FROM_FAVOURITE';
export const INCREMENT_FAVOURITE_MEAL_QUANTITY = 'INCREMENT_FAVOURITE_MEAL_QUANTITY';
export const DECREMENT_FAVOURTIE_MEAL_QUANTITY = 'DECREMENT_FAVOURTIE_MEAL_QUANTITY';

export const addMealToFavourite = meal => ({
  type: ADD_MEAL_TO_FAVOURITE,
  payload: meal,
});

export const removeMealFromFavourite = mealId => ({
  type: REMOVE_MEAL_FROM_FAVOURITE,
  payload: mealId,
});

export const incrementFavouriteQuantity = mealId => ({
  type: INCREMENT_FAVOURITE_MEAL_QUANTITY,
  payload: mealId,
});

export const decrementFavouriteQuantity = mealId => ({
  type: DECREMENT_FAVOURTIE_MEAL_QUANTITY,
  payload: mealId,
});

export const ADD_CATEGORY_TO_FILTER = 'ADD_CATEGORY_TO_FILTER';
export const REMOVE_CATEGORY_FROM_FILTER = 'REMOVE_CATEGORY_FROM_FILTER';

export const addCategoryToFilter = category => ({
  type: ADD_CATEGORY_TO_FILTER,
  category,
});

export const removeCategoryFromFilter = category => ({
  type: REMOVE_CATEGORY_FROM_FILTER,
  category,
});

export const ORDER_BY_ASC = 'ORDER_BY_ASC';
export const ORDER_BY_DESC = 'ORDER_BY_DESC';
export const CLEAR_ORDER_BY_LETTER = 'CLEAR_ORDER_BY_LETTER';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const orderByAsc = () => ({
  type: ORDER_BY_ASC,
});

export const orderByDesc = () => ({
  type: ORDER_BY_DESC,
});

export const clearOrderBy = () => ({
  type: CLEAR_ORDER_BY_LETTER,
});

export const change = letter => ({
  type: CHANGE_FILTER,
  letter,
});

export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_PAGE = 'GO_PAGE';
export const COUNT_ITEM = 'COUNT_ITEM';

export const prevPage = () => ({
  type: PREV_PAGE,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const goPage = n => ({
  type: GO_PAGE,
  currentPage: n,
});

export const countItems = n => ({
  type: COUNT_ITEM,
  totalItemsCount: n,
});
