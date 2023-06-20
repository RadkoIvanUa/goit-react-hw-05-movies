import MoviesList from 'components/movies-list/MoviesList';
import SearchForm from 'components/search-form/SearchForm';
import { useState, useEffect } from 'react';
import { getSearchMovies } from 'helpers/api';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  const [searchedMoviesArr, setSearchedMoviesArr] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const heandleSubmit = searchOuery => {
    setSearchParams({ query: searchOuery });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getSearchMovies(query).then(result => {
      if (result.length === 0) {
        alert('NO MACH');
        return;
      }

      return setSearchedMoviesArr([...result]);
    });
  }, [searchParams]);

  return (
    <>
      <SearchForm onSubmit={heandleSubmit} />
      <MoviesList moviesArr={searchedMoviesArr} />
    </>
  );
}
