import axios from 'axios';
import {
  fetchRequestPending, fetchRequestFailure, fetchSingleMeal,
} from '../actions/index';

const fetchMeal = id => async dispatch => {
  dispatch(fetchRequestPending());
  axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(response => {
      dispatch(fetchSingleMeal(response.data.meals[0]));
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch(fetchRequestFailure(error.response.errors));
      }
    });
};

export default fetchMeal;
