import axios from 'axios';
import {
  fetchRequestPending, fetchRequestSuccess, fetchRequestFailure, fetchCategoriesSuccess,
} from '../actions/index';

const getCategories = () => async dispatch => {
  dispatch(fetchRequestPending());
  axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => {
      dispatch(fetchRequestSuccess(response.statusText));
      dispatch(fetchCategoriesSuccess(response.data.categories));
    })
    .catch(error => {
      if (error.response && error.response.data) {
        dispatch(fetchRequestFailure(error.response.errors));
      }
    });
};

export default getCategories;
