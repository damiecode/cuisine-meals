/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavouriteItem from '../../components/favouriteItems/favourites';

const FavouriteMeals = props => (
  <>
    <div className="container" style={{ paddingTop: '6rem' }}>
      <div className="card shopping-cart">
        <div className="card-header bg-dark text-light">
          <FavoriteBorderIcon className="pr-2" aria-hidden="true" />
          Favourite Meals
          <div className="clearfix" />
        </div>
        <div className="card-body">
          {props.favouriteItemCount ? props.favouriteItems.map(favourite => (
            <FavouriteItem {...favourite} img={favourite.images[0]} key={favourite.id} />
          )) : <h1 className="display-4 mt-5 text-center">There is no meal in your favourite</h1> }
        </div>
      </div>
    </div>
  </>
);

FavouriteMeals.propTypes = {
  favouriteItems: PropTypes.string.isRequired,
  favouriteItemCount: PropTypes.number.isRequired,
};

export default connect()(FavouriteMeals);
