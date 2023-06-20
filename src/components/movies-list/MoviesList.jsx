import { lazy } from 'react';
import { useLocation } from 'react-router-dom';

const MovieListItem = lazy(() => import('../movie-list-item/MovieListItem'));

export default function MoviesList({ moviesArr }) {
  const location = useLocation();

  return (
    <ul>
      {moviesArr.map(trendingMovie => (
        <MovieListItem
          key={trendingMovie.id}
          id={trendingMovie.id}
          title={trendingMovie.title}
          location={location}
        />
      ))}
    </ul>
  );
}
