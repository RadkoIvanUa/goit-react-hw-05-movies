import MoviesList from 'components/movies-list/MoviesList';
import { getTrendingMovies } from 'helpers/api';
import { useEffect, useState } from 'react';

export default function Home() {
  const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(result => setTrendingMoviesArr([...result]));
  }, []);

  return <MoviesList moviesArr={trendingMoviesArr} />;
}
