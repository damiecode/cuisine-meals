import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addMealToFavourite } from '../../actions/index';

const MealDetails = meal => {
  const onFavourites = meal => {
    addMealToFavourite(meal);
  };

  return (
    <aside className="col-sm-7">
      <article className="card-body p-5">
        <h3 className="title mb-3">{meal.name}</h3>

        <dl className="item-property">
          <dt>Instructions</dt>
          <dd><p className="text-capitalize">{meal.instructions}</p></dd>
        </dl>
        <dl className="param param-feature">
          <dt>Category</dt>
          <dd className="text-capitalize">{meal.category}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Area</dt>
          <dd>{meal.area}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Tags</dt>
          <dd>{meal.tags}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Source</dt>
          <dd>{meal.source}</dd>
        </dl>
        <hr />
        <hr />
        <button
          type="button"
          onClick={onFavourites}
          className="btn btn-lg btn-outline-primary text-uppercase"
        >
          <FavoriteBorderIcon />
          {' '}
          Add to favourites
        </button>
      </article>
    </aside>
  );
};

MealDetails.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    category: PropTypes.string,
    area: PropTypes.string,
    source: PropTypes.string,
    tags: PropTypes.string,
    instructions: PropTypes.string,
    images: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  meal: state.meal,
});

const mapDispatchToProps = dispatch => ({
  addMealToFavourite: meal => {
    dispatch(addMealToFavourite(meal));
  },
});

export default connect(mapStateToProps)(mapDispatchToProps)(MealDetails);
