import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchMeal from '../../data/singleMeal';
import PageLoader from '../../components/loader/loader';
import Image from '../../components/mealImage/mealImage';
import MealDetails from '../../components/mealDetails/mealDetails';
import { resetSelected } from '../../actions/index';
import {
  getImg, getArea, getIntructions, getIngredient, getName, categoryName, getMealsPending,
} from '../../actions/meal';

const MealsDetails = props => {
  const {
    img, area, ingredients, match, fetchMeal, name, category, pending, resetSelected, instructions,
  } = props;
  const { id } = match.params;
  useEffect(() => {
    fetchMeal(id);
  }, [fetchMeal, id]);

  const shouldComponentRender = () => {
    if (name === undefined || pending === true) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return (<PageLoader />);
  }

  return (
    <div className="item-d card text-center d-flex">
      <div className="item-c card-img-top">
        <Image className="item-i shadow" src={img} name={name} />
        <div className="item-m card-body">
          <MealDetails category={category} className="ingredients" area={area} ingredients={ingredients} instructions={instructions} />
          <div className="ingd-btns">
            <Link to="/">
              <button type="button" onClick={resetSelected} className="shadow btn">Home</button>
            </Link>
            <Link to={`/category/${category}`}>
              <button type="button" onClick={resetSelected} className="shadow btn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { singleMeal } = state;
  const { details } = singleMeal;
  return (
    {
      img: getImg(details),
      area: getArea(details),
      instructions: getIntructions(details),
      ingredients: getIngredient(details),
      name: getName(details),
      category: categoryName(details),
      pending: getMealsPending(details),
    }
  );
};

const mapDispatchToProps = {
  fetchMeal,
  resetSelected,
};

MealsDetails.defaultProps = {
  img: '',
  pending: false,
  name: '',
  category: '',
  area: '',
  ingredients: [''],
  instructions: '',
};

MealsDetails.propTypes = {
  img: PropTypes.string,
  area: PropTypes.string,
  pending: PropTypes.bool,
  fetchMeal: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(String),
  instructions: PropTypes.string,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  name: PropTypes.string,
  category: PropTypes.string,
  resetSelected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsDetails);
