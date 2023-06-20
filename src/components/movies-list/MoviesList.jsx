import MovieListItem from 'components/movie-list-item/MovieListItem';
import { useLocation } from 'react-router-dom';

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
