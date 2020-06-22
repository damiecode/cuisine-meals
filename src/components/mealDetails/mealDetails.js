import React from 'react';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addMealToFavourite } from '../../actions/index';

const MealDetails = props => {
  const {
    name,
    images,
    category,
    area,
    tags,
    source,
    instructions,
    id,
  } = props.meal;

  const onFavourites = () => {
    props.dispatch(addMealToFavourite(props.meal));
  };

  return (
    <aside className="col-sm-7">
      <article className="card-body p-5">
        <h3 className="title mb-3">{name}</h3>

        <dl className="item-property">
          <dt>Instructions</dt>
          <dd><p className="text-capitalize">{instructions}</p></dd>
        </dl>
        <dl className="param param-feature">
          <dt>Category</dt>
          <dd className="text-capitalize">{category}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Area</dt>
          <dd>{area}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Tags</dt>
          <dd>{tags}</dd>
        </dl>
        <dl className="param param-feature">
          <dt>Source</dt>
          <dd>{source}</dd>
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

export default MealDetails;
