import { useState } from 'react';

import PropTypes from 'prop-types';

// STYLED COMPONENTS
import { StyledSearchForm } from './StyledSearchForm';

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
    <StyledSearchForm onSubmit={heandleSubmit}>
      <input type="text" value={searchValue} onChange={heandleChange} />
      <button type="submit" disabled={isSearchButtonDisable}>
        Search
      </button>
    </StyledSearchForm>
  );
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
