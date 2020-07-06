import React from 'react';
import PropTypes from 'prop-types';

const letters = [
  'a', 'b', 'c', 'd',
  'e', 'f', 'f', 'g',
  'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's',
  't', 'u', 'v', 'w',
  'x', 'y', 'z',
];

const LetterFilter = ({ changeFilter }) => {
  const select = React.useRef(null);
  const keys = Object.keys(letters);
  const filtered = keys.filter(item => letters[item]);
  return (
    <div className="filter">
      <select
        id="filter-letter"
        className="form-input"
        name="letter"
        ref={select}
        onChange={() => changeFilter(select.current.value)}
      >
        {filtered.map(letter => (
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
