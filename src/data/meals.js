import axios from 'axios';
import {
  fetchRequest, fetchRequestSuccess, fetchRequestFailure, fetchMealsSuccess,
} from '../actions/index';

const URL = 'https://www.themealdb.com/api/json/v1/1/';

const fetchMeals = (letter = 'a') => dispatch => {
  dispatch(fetchRequest());
  axios.get(`${URL}/search.php?f=${letter}`)
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
