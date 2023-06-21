import { getTrendingMovies } from 'helpers/api';
import { useEffect, useState, lazy } from 'react';
const MoviesList = lazy(() => import('../components/movies-list/MoviesList'));

export default function Home() {
  const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(resp => {
      setTrendingMoviesArr([...resp.data.results]);
    });
  }, []);

  return <MoviesList moviesArr={trendingMoviesArr} />;
}
