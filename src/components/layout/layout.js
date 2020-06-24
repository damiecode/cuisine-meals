import React from 'react';
import PropTypes from 'prop-types';
import './layout.scss';

const Layout = (
  {
    len,
    click,
    isActive,
  },
) => {
  const items = [];

  let classess = 'layout-mode__item';

  if (isActive) {
    classess += ' layout-mode__item--active';
  }

  for (let i = 0; i < len; i += 1) {
    items.push(<div className={classess} />);
  }

  return (
    <button type="button" className="layout-mode" onClick={() => { click(len); }}>
      {items}
    </button>
  );
};

Layout.propTypes = {
  len: PropTypes.number.isRequired,
  click: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Layout;
