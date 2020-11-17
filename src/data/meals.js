import axios from 'axios';
import {
  fetchRequestPending, fetchRequestSuccess, fetchMealsSuccess, fetchRequestFailure,
} from '../actions/index';

const fetchMeals = type => dispatch => {
  dispatch(fetchRequestPending());
  axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${type}`)
    .then(response => {
      dispatch(fetchRequestSuccess(response.statusText));
      dispatch(fetchMealsSuccess(response.data.meals));
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch(fetchRequestFailure(error.response.errors));
      }
    });
};

export default fetchMeals;
