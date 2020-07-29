import React from 'react';

const Footer = () => (
  <footer className="py-5 footer">
    <div className="container">
      <p className="m-0 text-center text-white">
        Copyright © Damilola Ale
        <br />
        {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
