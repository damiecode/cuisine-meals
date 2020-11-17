import {
  CHANGE_CATEGORY,
  fetchSingleMeal,
} from '../../actions/index';

describe('update category', () => {
  it('should create an action to change category', () => {
    const text = 'Beef';
    const expectedAction = {
      type: 'CHANGE_CATEGORY',
      category: text,
    };
    expect(CHANGE_CATEGORY(text)).toEqual(expectedAction);
  });
});

describe('get meal details', () => {
  it('should get meal details', () => {
    const data = { name: 'chicken', category: 'Chicken' };
    const expectedAction = {
      type: 'FETCH_MEAL_SUCCESS',
      details: data,
    };
    expect(fetchSingleMeal(data)).toEqual(expectedAction);
  });
});
