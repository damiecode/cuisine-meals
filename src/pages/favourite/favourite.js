import React from 'react';
import { connect } from 'react-redux';
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
          {props.favouriteItemCount ? props.favouriteItems.map(cart => (
            <FavouriteItem {...favourite} img={favourite.images[0]} />
          )) : <h1 className="display-4 mt-5 text-center">There is no meal in your favourite</h1> }
        </div>
      </div>
    </div>
  </>
);

const mapStateToProps = state => ({
  favouriteItems: state.favourite,
  favouriteItemCount: state.favourite.reduce((count, curItem) => count + curItem.quantity, 0),
});

export default connect(mapStateToProps, null)(FavouriteMeals);
