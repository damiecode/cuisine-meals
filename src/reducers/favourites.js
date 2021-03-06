/* eslint-disable no-case-declarations */
import {
  ADD_MEAL_TO_FAVOURITE,
  DECREMENT_FAVOURTIE_MEAL_QUANTITY,
  INCREMENT_FAVOURITE_MEAL_QUANTITY,
  REMOVE_MEAL_FROM_FAVOURITE,
} from '../actions';
import fetchMeals from '../data/meals';

const initialState = {
  meals: fetchMeals,
  favourite: [],
};

const favouritesReducer = (state = initialState, action) => {
  let updatedFavourite;
  let updatedMealIndex;

  switch (action.type) {
    case ADD_MEAL_TO_FAVOURITE:
      updatedFavourite = [...state.favourite];
      updatedMealIndex = updatedFavourite.findIndex(meal => meal.id === action.payload.id);

      if (updatedMealIndex < 0) {
        updatedFavourite.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedMeal = {
          ...updatedFavourite[updatedMealIndex],
        };

        updatedMeal.quantity += 1;
        updatedFavourite[updatedMealIndex] = updatedMeal;
      }

      return { ...state, favourite: updatedFavourite };
    case REMOVE_MEAL_FROM_FAVOURITE:
      updatedFavourite = [...state.favourite];
      updatedMealIndex = updatedFavourite.findIndex(
        meal => meal.id === action.payload,
      );

      updatedFavourite.splice(updatedMealIndex, 1);

      return { ...state, favourite: updatedFavourite };
    default:
      return state;
    case INCREMENT_FAVOURITE_MEAL_QUANTITY:
      updatedFavourite = [...state.favourite];
      updatedMealIndex = updatedFavourite.findIndex(
        meal => meal.id === action.payload,
      );

      const incrementedMeal = {
        ...updatedFavourite[updatedMealIndex],
      };

      incrementedMeal.quantity += 1;

      updatedFavourite[updatedMealIndex] = incrementedMeal;

      return { ...state, favourite: updatedFavourite };

    case DECREMENT_FAVOURTIE_MEAL_QUANTITY:
      updatedFavourite = [...state.favourite];
      updatedMealIndex = updatedFavourite.findIndex(
        meal => meal.id === action.payload,
      );

      const decrementedMeal = {
        ...updatedFavourite[updatedMealIndex],
      };

      decrementedMeal.quantity -= 1;

      updatedFavourite[updatedMealIndex] = decrementedMeal;

      return { ...state, favourite: updatedFavourite };
  }
};

export default favouritesReducer;
