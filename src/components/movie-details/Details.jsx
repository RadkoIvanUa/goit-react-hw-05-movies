import { StyledDetails } from './StyledDetails';

import PropTypes from 'prop-types';

export default function Details({
  title,
  releaseYear,
  score,
  image,
  overview,
  genres,
}) {
  return (
    <StyledDetails>
      {image ? (
        <img
          src={`https://image.tmdb.org/t/p/w200/${image}`}
          alt=""
          width="200px"
          height="300px"
        />
      ) : (
        <img
          src="https://i.imgur.com/oQs3mlT.png"
          alt="Actor"
          width="200px"
          height="300px"
        />
      )}

      <div>
        <h2>
          {title} ({releaseYear})
        </h2>

        <p> User Score: {score}%</p>
        <h3>Overview </h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genres.join(', ')}</p>
      </div>
    </StyledDetails>
  );
}

Details.propTypes = {
  title: PropTypes.string,
  releaseYear: PropTypes.number,
  score: PropTypes.string,
  image: PropTypes.string,
  overview: PropTypes.array,
  genres: PropTypes.arrayOf(PropTypes.object),
};
