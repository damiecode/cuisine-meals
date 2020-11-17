import singleMealReducer from '../../reducers/singleMeal';

const initialState = {
  pending: false,
  details: {},
  error: undefined,
};

describe('update category', () => {
  it('should show a single recipe', () => {
    expect(singleMealReducer(initialState, { type: 'FETCH_MEAL_SUCCESS', details: { a: 'e', b: 'bee' } })).toEqual({ ...initialState, details: { a: 'e', b: 'bee' } });
  });
});
