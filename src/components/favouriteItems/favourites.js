import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import shortenTitle from '../../pipes/shortenTitle';
import './favourites.scss';
import {
  addMealToFavourite,
  decrementFavouriteQuantity,
  incrementFavouriteQuantity,
  removeMealFromFavourite,
} from '../../actions';

const FavouriteItem = ({ meal }) => {
  const [itemQuantity, setItemQuantity] = useState(meal.quantity);
  const removeItem = () => {
    removeMealFromFavourite(meal.id);
  };

  const handleQuantityChange = e => {
    const { value } = e.target;
    if (value > 0 && value <= 10) {
      setItemQuantity(value);
      addMealToFavourite(meal.id);
    }
  };

  const incrementOrDecrement = (e, type) => {
    const value = itemQuantity;

    if (type === 'inc' && value < 10) {
      setItemQuantity(itemQuantity + 1);
      incrementFavouriteQuantity(meal.id);
    }

    if (type === 'desc' && value > 1) {
      setItemQuantity(itemQuantity - 1);
      decrementFavouriteQuantity(meal.id);
    }
  };

  return (
    <div className="row align-items-center mb-3">
      <div className="col-12 col-sm-12 col-md-2 text-center">
        <img
          className="img-responsive"
          src={meal.images}
          style={{ height: '60%', width: '60%' }}
          alt={meal.instructions}
        />
      </div>
      <div className="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
        <h4 className="product-name"><strong>{shortenTitle(meal.name)}</strong></h4>
        <h4>
          <small className="product-description">{meal.instructions}</small>
        </h4>
      </div>
      <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row product-quantity-container align-items-center">
        <div className="col-6 col-sm-6 col-md-6 text-md-right" style={{ paddingTop: '5px' }}>
          <h6>
            <strong>
              <h5 className="meal__category">{meal.category}</h5>
              <span className="text-muted">x</span>
            </strong>
          </h6>
        </div>
        <div className="col-4 col-sm-4 col-md-4">
          <div className="quantity">
            <input
              onClick={e => { incrementOrDecrement(e, 'inc'); }}
              type="button"
              value="+"
              className="plus"
            />
            <input
              onChange={handleQuantityChange}
              type="number"
              step="1"
              max="10"
              min="1"
              value={itemQuantity}
              title="Qty"
              className="qty"
              size="4"
            />
            <input
              onClick={e => { incrementOrDecrement(e, 'desc'); }}
              type="button"
              value="-"
              className="minus"
            />
          </div>
        </div>
        <div className="col-2 col-sm-2 col-md-2 text-right">
          <button
            onClick={removeItem}
            type="button"
            className="btn btn-outline-danger btn-xs"
          >
            <i className="fa fa-trash" />
          </button>
        </div>
      </div>
    </div>
  );
};

FavouriteItem.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    instructions: PropTypes.string,
    images: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
};

const mapStateToProps = state => ({
  meal: state.meal,
});

const mapDispatchToProps = dispatch => ({
  addMealToFavourite: meal => {
    dispatch(addMealToFavourite(meal));
  },
  removeMealFromFavourite: meal => {
    dispatch(removeMealFromFavourite(meal));
  },
  incrementFavouriteQuantity: meal => {
    dispatch(incrementFavouriteQuantity(meal));
  },
  decrementFavouriteQuantity: meal => {
    dispatch(decrementFavouriteQuantity(meal));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteItem);
