/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const Header = ({ favouritesLength }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
      <NavLink className="navbar-brand" to="/">Cuisine Meals</NavLink>
    </div>
    <div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to="/favourites">
            <FavoriteBorderIcon />
            Favourites
            {favouritesLength ? `(${favouritesLength})` : '' }
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  favouritesLength: PropTypes.number,
};

export default Header;
