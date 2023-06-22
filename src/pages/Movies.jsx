import { useState, useEffect, lazy } from 'react';
import { getSearchMovies } from 'helpers/api';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const MoviesList = lazy(() => import('../components/movies-list/MoviesList'));
const SearchForm = lazy(() => import('../components/search-form/SearchForm'));

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
    getSearchMovies(query).then(resp => {
      const result = resp.data.results;
      if (result.length === 0) {
        toast.error('No results found!');
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
