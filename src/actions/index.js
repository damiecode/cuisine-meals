const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING';
const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

const fetchProductsPending = () => ({
  type: FETCH_PRODUCTS_PENDING,
});

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_ERROR,
  error,
});

export {
  FETCH_PRODUCTS_PENDING,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
};
