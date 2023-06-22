import { getTrendingMovies } from 'helpers/api';
import { useEffect, useState } from 'react';
import MoviesList from 'components/movies-list/MoviesList';

export default function Home() {
  const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(resp => {
      setTrendingMoviesArr([...resp.data.results]);
    });
  }, []);

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>
        Trending now
      </h2>
      <MoviesList moviesArr={trendingMoviesArr} />
    </>
  );
}
