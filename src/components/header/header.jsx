/* eslint-disable react/require-default-props */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg d-block home-link">
    <div className="container">
      <Link className="" to="/">
        <h4 className="Nav-text navbar-brand text-white"> Cuisine Meals </h4>
      </Link>
    </div>
  </nav>
);

export default Header;
