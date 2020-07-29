import allMealsReducer from '../../reducers/meals';

const initialState = {
  pending: false,
  meals: [],
  error: undefined,
  category: undefined,
};

describe('update category', () => {
  it('should be able to change category', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_REQUEST_PENDING' })).toEqual({ ...initialState, pending: true });
  });
  it('should update the current state of meals', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_REQUEST_SUCCESS', meals: ['beef', 'chicken'] })).toEqual({ ...initialState, pending: false, meals: ['beef', 'chicken'] });
  });
});
