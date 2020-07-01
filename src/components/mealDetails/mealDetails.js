/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const MealDetails = ({ meal, addMealToFavourite }) => {
  const imageRef = React.createRef();
  const [img] = useState(meal.strMealThumb[0]);

  return (
    <div>
      <div className="col-sm-5 border-right">
        <article className="gallery-wrap">
          <div className="img-big-wrap">
            <div style={{ padding: '2rem' }}>
              <a href={img}>
                <img
                  ref={imageRef}
                  src={img}
                  alt={meal.strMeal}
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </a>
            </div>
          </div>
        </article>
      </div>
      <aside className="col-sm-7">
        <article className="card-body p-5">
          <h3 className="title mb-3">{meal.strMeal}</h3>

          <dl className="item-property">
            <dt>Instructions</dt>
            <dd><p className="text-capitalize">{meal.strInstructions}</p></dd>
          </dl>
          <dl className="param param-feature">
            <dt>Category</dt>
            <dd className="text-capitalize">{meal.strCategory}</dd>
          </dl>
          <dl className="param param-feature">
            <dt>Area</dt>
            <dd>{meal.strArea}</dd>
          </dl>
          <dl className="param param-feature">
            <dt>Tags</dt>
            <dd>{meal.strTags}</dd>
          </dl>
          <hr />
          <hr />
          <button
            type="button"
            onClick={() => addMealToFavourite(meal)}
            className="btn btn-lg btn-outline-primary text-uppercase"
          >
            <FavoriteBorderIcon />
            {' '}
            Add to favourites
          </button>
        </article>
      </aside>
    </div>
  );
};

MealDetails.propTypes = {
  meal: PropTypes.shape({
    idMeal: PropTypes.number,
    strMeal: PropTypes.string,
    strCategory: PropTypes.string,
    strArea: PropTypes.string,
    strTags: PropTypes.string,
    strInstructions: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
  addMealToFavourite: PropTypes.func.isRequired,
};

export default connect()(MealDetails);
