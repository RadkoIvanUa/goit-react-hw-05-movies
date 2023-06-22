import { useState } from 'react';

import PropTypes from 'prop-types';

export default function SearchForm({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchButtonDisable, setIsSearchButtonDisable] = useState(true);

  const heandleChange = e => {
    setIsSearchButtonDisable(false);
    if (!e.target.value.trim()) {
      setIsSearchButtonDisable(true);
    }

    setSearchValue(e.target.value);
  };

  const heandleSubmit = e => {
    e.preventDefault();
    onSubmit(searchValue);
    setSearchValue('');
    setIsSearchButtonDisable(true);
  };

  return (
    <form onSubmit={heandleSubmit}>
      <input type="text" value={searchValue} onChange={heandleChange} />
      <button type="submit" disabled={isSearchButtonDisable}>
        Search
      </button>
    </form>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
