import axios from 'axios';
import { useEffect } from 'react';
import {
  fetchRequest, fetchRequestSuccess, fetchRequestFailure, fetchMealsSuccess,
} from '../actions/index';

const URL = 'https://www.themealdb.com/api/json/v1/1/';
const API_GET_NAME = letter => `${URL}/search.php?f=${letter}`;

const fetchMeals = () => dispatch => {
  dispatch(fetchRequest());
  useEffect(() => {
    axios.get(`${API_GET_NAME}`)
      .then(response => {
        dispatch(fetchRequestSuccess(response.statusText));
        dispatch(fetchMealsSuccess(response.data.meals));
      })
      .catch(error => {
        dispatch(fetchRequestFailure(error.response.data.status_message));
      });
  });
};

export default fetchMeals;
