const fetchRequestPending = () => ({
  type: 'FETCH_REQUEST_PENDING',
});

const fetchRequestSuccess = response => ({
  type: 'FETCH_REQUEST_SUCCESS',
  response,
});

const fetchMealsSuccess = meals => ({
  type: 'FETCH_MEALS_SUCCESS',
  meals,
});

const fetchRequestFailure = error => ({
  type: 'FETCH_REQUEST_FAILURE',
  error,
});

const fetchCategoriesSuccess = categories => ({
  type: 'FETCH_CATEGORIES_SUCCESS',
  categories,
});

const fetchSingleMeal = details => ({
  type: 'FETCH_MEAL_SUCCESS',
  details,
});

const CHANGE_CATEGORY = category => ({
  type: 'CHANGE_CATEGORY',
  category,
});

export const resetSelected = () => ({ type: 'RESET' });

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

export {
  fetchRequestPending,
  fetchRequestSuccess,
  fetchRequestFailure,
  fetchMealsSuccess,
  fetchCategoriesSuccess,
  fetchSingleMeal,
  CHANGE_CATEGORY,
};
