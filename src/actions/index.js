export const ADD_MEAL_TO_FAVOURITE = 'ADD_MEAL_TO_FAVOURITE';
export const REMOVE_MEAL_FROM_FAVOURITE = 'REMOVE_MEAL_FROM_FAVOURITE';
export const INCREMENT_FAVOURITE_ITEM_QUANTITY = 'INCREMENT_FAVOURITE_ITEM_QUANTITY';
export const DECREMENT_FAVOURTIE_ITEM_QUANTITY = 'DECREMENT_FAVOURTIE_ITEM_QUANTITY';

export const addMealToFavourite = meal => ({
  type: ADD_MEAL_TO_FAVOURITE,
  payload: meal,
});

export const removeMealFromFavourite = mealId => ({
  type: REMOVE_MEAL_FROM_FAVOURITE,
  payload: mealId,
});

export const incrementFavouriteQuantity = mealId => ({
  type: INCREMENT_FAVOURITE_ITEM_QUANTITY,
  payload: mealId,
});

export const decrementFavouriteQuantity = mealId => ({
  type: DECREMENT_FAVOURTIE_ITEM_QUANTITY,
  payload: mealId,
});

// import axios from 'axios';

// const URL = 'https://www.themealdb.com/api/json/v1/1/';
// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_GET_NAME = 'meal/name';
// const API_GET_MEAL_LATEST = 'meal/latest';
// const API_GET_MEAL_INGREDIENT = 'meal/ingredient';
// const API_GET_MAIN_INGREDIENT = 'meal/main_ingredient';
// const API_GET_MEAL_AREA = 'meal/area';
// const API_GET_MEAL_BY = 'filter/meal';
// const API_GET_MEAL = mealID => `meal/${mealID}`;

// const FETCH_MEALS_PENDING = 'FETCH_MEAL_PENDING';
// const FETCH_MEALS_SUCCESS = 'FETCH_MEAL_SUCCESS';
// const FETCH_MEALS_ERROR = 'FETCH_MEAL_ERROR';
// const FETCH_MEALLIST = 'FETCH_MEALLIST';
// const FETCH_MEAL = 'FETCH_MEAL';
// const CHANGE_FILTER = 'CHANGE_FILTER';
// const TOGGLE_MODAL = 'TOGGLE_MODAL';
// const REFRESH_MODAL = 'REFRESH_MODAL';

// const fetchMealsPending = () => ({
//   type: FETCH_MEALS_PENDING,
// });

// const fetchMealsSuccess = response => ({
//   type: FETCH_MEALS_SUCCESS,
//   response,
// });

// const fetchMealsError = error => ({
//   type: FETCH_MEALS_ERROR,
//   error,
// });

// const fetchMealListSuccess = (meals, apiURL, searchBy, mealIDS) => ({
//   type: FETCH_MEALLIST,
//   response: meals,
//   apiURL,
//   searchBy,
//   mealIDS,
// });

// const fetchMealSuccess = meals => ({
//   type: FETCH_MEAL,
//   response: meals,
// });

// const changeFilter = genre => ({
//   type: CHANGE_FILTER,
//   genre,
// });

// const toggleModal = (modalType, selectedObject) => ({
//   type: TOGGLE_MODAL,
//   modalType,
//   selectedObject,
// });

// const refreshModal = selectedObject => ({
//   type: REFRESH_MODAL,
//   selectedObject,
// });

// // MealList
// const fetchMealListBy = (API_GET_MOVIE_BY = API_GET_MOVIE_POPULAR, searchBy 
// = 'Popularity', page = '1', genreIDs = []) => dispatch => {
//   const genreParams = genreIDs ? `${API_PARAMS_GENRE}${genreIDs.join('%2C')}` : '';
//   dispatch(fetchRequest());
//   axios.get(`${URL}${API_GET_MOVIE_BY}${API_KEY}
// ${API_PARAMS_LANG_EN}${API_PARAMS_PAGE}${page}${genreParams}`)
//     .then(response => {
//       dispatch(fetchRequestSuccess(response.statusText));
//       dispatch(fetchMovieListSuccess(response.data, API_GET_MOVIE_BY, searchBy, genreIDs));
//     })
//     .catch(error => {
//       dispatch(fetchRequestFailure(error.response.data.status_message));
//     });
// };

// // MovieList Populate Similar Movies List
// const fetchSimilarMovies = (movieID, searchBy = 'Similarity', page = '1') => dispatch => {
//   dispatch(fetchRequest());
//   axios.get(`${URL}${API_GET_MOVIE_SIMILAR(movieID)}${API_KEY}$
// {API_PARAMS_LANG_EN}${API_PARAMS_PAGE}${page}`)
//     .then(response => {
//       dispatch(fetchRequestSuccess(response.statusText));
//       dispatch(fetchMovieListSuccess(response.data, API_GET_MOVIE_SIMILAR(movieID), searchBy));
//     })
//     .catch(error => {
//       dispatch(fetchRequestFailure(error.response.data.status_message));
//     });
// };

// // MoviePage Grab a Single Movie
// const fetchMovie = movieID => dispatch => {
//   dispatch(fetchRequest());
//   axios.get(`${URL}${API_GET_MOVIE(movieID)}${API_KEY}${API_PARAMS_LANG_EN}`)
//     .then(response => {
//       dispatch(fetchRequestSuccess(response.statusText));
//       dispatch(fetchMovieSuccess(response.data));
//     })
//     .catch(error => {
//       dispatch(fetchRequestFailure(error.response.data.status_message));
//     });
// };

// // Genres Populate List
// const fetchGenres = () => dispatch => {
//   dispatch(fetchRequest());
//   axios.get(`${URL}${API_GET_GENRES}${API_KEY}`)
//     .then(response => {
//       dispatch(fetchRequestSuccess(response.statusText));
//       dispatch(fetchGenresSuccess(response.data.genres));
//     })
//     .catch(error => {
//       dispatch(fetchRequestFailure(error.response.data.status_message));
//     });
// };

// export {
//   CHANGE_FILTER, FETCH_MEALLIST, FETCH_MEAL, FETCH_GENRES,
//   FETCH_MEALS_PENDING, FETCH_MEALS_SUCCESS, FETCH_MEALS_ERROR,
//   TOGGLE_MODAL, REFRESH_MODAL, fetchMealsPending,
//   fetchMealsSuccess,
//   fetchMealsError,
//   API_GET_MEAL_POPULAR, API_GET_MEAL_TOP_RATED, API_GET_MEAL_UPCOMING,
//   API_GET_MEAL_IN_THEATRES, API_GET_MEAL_BY,
//   changeFilter, fetchMealListBy, fetchSimilarMeals, fetchMeal, fetchGenres,
//   toggleModal, refreshModal,
// };
