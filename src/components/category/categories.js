import React from 'react';
import PropTypes from 'prop-types';
import Image from '../mealImage/mealImage';

const category = ({
  src, name,
}) => (
  <Image className="category shadow mt-5" src={src} name={name} />
);

category.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default category;
