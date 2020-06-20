import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = ({ cartLength }) => (
  <nav>
    <div>
      <NavLink to="/">Cuisine Meals</NavLink>
    </div>
    <div>
      <ul>
        <li>
          <NavLink to="{/cart}">
            Cart
            {cartLength ? `(${cartLength})` : '' }
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  cartLength: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartLength: state.length,
});

export default connect(mapStateToProps)(Header);
