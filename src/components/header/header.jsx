import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ favouritesLength }) => (
  <nav>
    <div>
      <NavLink to="/">Cuisine Meals</NavLink>
    </div>
    <div>
      <ul>
        <li>
          <NavLink to="{/favourites}">
            Favourites
            {favouritesLength ? `(${favouritesLength})` : '' }
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  favouritesLength: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  favouritesLength: state.length,
});

export default connect(mapStateToProps)(Header);
