import axios from 'axios';
import {
  fetchRequest, fetchRequestSuccess, fetchRequestFailure, fetchCategoriesSuccess,
} from '../actions/index';

const URL = 'https://www.themealdb.com/api/json/v1/1/';
const API_LIST_CATEGORIES = `${URL}list.php?c=list`;

const fetchCatgories = () => dispatch => {
  dispatch(fetchRequest());
  axios.get(`${API_LIST_CATEGORIES}`)
    .then(response => {
      dispatch(fetchRequestSuccess(response.statusText));
      dispatch(fetchCategoriesSuccess(response.data.categories));
    })
    .catch(error => {
      dispatch(fetchRequestFailure(error.response.data.status_message));
    });
};

export default fetchCatgories;
