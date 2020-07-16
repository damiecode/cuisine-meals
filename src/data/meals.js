import axios from 'axios';
import {
  fetchRequest, fetchRequestSuccess, fetchRequestFailure, fetchMealsSuccess,
} from '../actions/index';

const URL = 'https://www.themealdb.com/api/json/v1/1/';
const API_GET_MEAL = letter => `search.php?f=${letter}`;

const fetchMeals = letter => async dispatch => {
  dispatch(fetchRequest());
  axios.get(`${URL}/${API_GET_MEAL(letter)}`)
    .then(response => {
      dispatch(fetchRequestSuccess(response.statusText));
      dispatch(fetchMealsSuccess(response.data.meals));
      return response.data.meals;
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch(fetchRequestFailure(error.response.data.errors));
      }
    });
};

export default fetchMeals;
