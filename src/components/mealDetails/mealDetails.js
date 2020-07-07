/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { addMealToFavourite } from '../../actions';

const MealDetails = ({ meal, addMealToFavourite }) => {
  for (let i = 0; i < meal.length; i += 1) {
    const imageRef = React.createRef();
    const [img] = useState(meal[i].strMealThumb);
    return (
      <div>
        <div className="col-sm-5 border-right">
          <article className="gallery-wrap">
            <div className="img-big-wrap">
              <div style={{ padding: '2rem' }}>
                <a href={img}>
                  <img
                    ref={imageRef}
                    src={meal[i].strMealThumb}
                    alt={meal[i].strMeal}
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
            <h3 className="title mb-3">{meal[i].strMeal}</h3>

            <dl className="item-property">
              <dt>Instructions</dt>
              <dd><p className="text-capitalize">{meal[i].strInstructions}</p></dd>
            </dl>
            <dl className="param param-feature">
              <dt>Category</dt>
              <dd className="text-capitalize">{meal[i].strCategory}</dd>
            </dl>
            <dl className="param param-feature">
              <dt>Area</dt>
              <dd>{meal[i].strArea}</dd>
            </dl>
            <dl className="param param-feature">
              <dt>Tags</dt>
              <dd>{meal[i].strTags}</dd>
            </dl>
            <hr />
            <hr />
            <button
              type="button"
              onClick={() => addMealToFavourite(meal[i].idMeal)}
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
  }
  return meal;
};

MealDetails.propTypes = {
  meal: PropTypes.shape({
    length: PropTypes.number,
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

const mapStateToProps = state => ({
  meal: state.meals,
});

const mapDispatchToProps = dispatch => ({
  addMealToFavourite: meal => {
    dispatch(addMealToFavourite(meal));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
