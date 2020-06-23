/* eslint-disable no-case-declarations */
import {
  ADD_MEAL_TO_FAVOURITE,
  DECREMENT_FAVOURTIE_ITEM_QUANTITY,
  INCREMENT_FAVOURITE_ITEM_QUANTITY,
  REMOVE_MEAL_FROM_FAVOURITE,
} from '../actions';
import fetchMeals from '../data/meals';

const initialState = {
  meals: fetchMeals,
  favourite: [],
};

const storeReducer = (state = initialState, action) => {
  let updatedFavourite;
  let updatedItemIndex;

  switch (action.type) {
    case INCREMENT_FAVOURITE_ITEM_QUANTITY:
      updatedFavourite = [...state.favourite];
      updatedItemIndex = updatedFavourite.findIndex(
        item => item.id === action.payload,
      );

      const incrementedItem = {
        ...updatedFavourite[updatedItemIndex],
      };

      incrementedItem.quantity += 1;

      updatedFavourite[updatedItemIndex] = incrementedItem;

      return { ...state, favourite: updatedFavourite };

    case DECREMENT_FAVOURTIE_ITEM_QUANTITY:
      updatedFavourite = [...state.favourite];
      updatedItemIndex = updatedFavourite.findIndex(
        item => item.id === action.payload,
      );

      const decrementedItem = {
        ...updatedFavourite[updatedItemIndex],
      };

      decrementedItem.quantity -= 1;

      updatedFavourite[updatedItemIndex] = decrementedItem;

      return { ...state, favourite: updatedFavourite };

    case ADD_MEAL_TO_FAVOURITE:
      updatedFavourite = [...state.favourite];
      updatedItemIndex = updatedFavourite.findIndex(item => item.id === action.payload.id);

      if (updatedItemIndex < 0) {
        updatedFavourite.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedFavourite[updatedItemIndex],
        };

        updatedItem.quantity += 1;
        updatedFavourite[updatedItemIndex] = updatedItem;
      }

      return { ...state, favourite: updatedFavourite };
    case REMOVE_MEAL_FROM_FAVOURITE:
      updatedFavourite = [...state.favourite];
      updatedItemIndex = updatedFavourite.findIndex(
        item => item.id === action.payload,
      );

      updatedFavourite.splice(updatedItemIndex, 1);

      return { ...state, favourite: updatedFavourite };
    default:
      return state;
  }
};

export default storeReducer;
