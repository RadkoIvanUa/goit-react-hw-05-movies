import { useState } from 'react';

export default function SearchForm({ onSubmit }) {
  const [searchValue, setSearchValue] = useState('');
  const [isSearchButtonDisable, setIsSearchButtonDisable] = useState(true);

  const heandleChange = e => {
    if (e.target.value.trim() === '') {
      return;
    } else {
      setIsSearchButtonDisable(false);
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
