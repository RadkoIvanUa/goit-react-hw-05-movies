import { StyledDetails } from './StyledDetails';

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
      <img
        src={`https://image.tmdb.org/t/p/w200/${image}`}
        alt=""
        width="200px"
        height="300px"
      />
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
