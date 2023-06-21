import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import MovieListItem from 'components/movie-list-item/MovieListItem';

// STYLED COMPONENTS

import { StyledMoviesList } from './StyledMovieList';

export default function MoviesList({ moviesArr }) {
  const location = useLocation();

  return (
    <StyledMoviesList>
      {moviesArr.map(trendingMovie => (
        <MovieListItem
          key={trendingMovie.id}
          id={trendingMovie.id}
          title={trendingMovie.title}
          location={location}
        />
      ))}
    </StyledMoviesList>
  );
}

MoviesList.propTypes = {
  moviesArr: PropTypes.arrayOf(PropTypes.object).isRequired,
};
