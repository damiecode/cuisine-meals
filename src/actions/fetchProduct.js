import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from 'actions';

const fetchProducts = () => dispatch => {
  dispatch(fetchProductsPending());
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      dispatch(fetchProductsSuccess(res.meals));
      return res.meals;
    })
    .catch(error => {
      dispatch(fetchProductsError(error));
    });
};

export default fetchProducts;
