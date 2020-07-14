import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/css/filter.scss';

const letters = [
  'a', 'b', 'c', 'd',
  'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p',
  'q', 'r', 's', 't',
  'u', 'v', 'w', 'x',
  'y', 'z',
];

const LetterFilter = ({ changeFilter }) => {
  const select = React.useRef(null);
  return (
    <div className="filter">
      <select
        id="filter-letter"
        className="form-input"
        name="letter"
        ref={select}
        onChange={() => changeFilter(select.current.value)}
      >
        {letters.map(letter => (
          <option key={letter}>{letter}</option>
        ))}
      </select>
    </div>
  );
};

LetterFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default LetterFilter;
