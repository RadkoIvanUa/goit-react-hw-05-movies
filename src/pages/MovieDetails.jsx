import { getMovieDetails } from 'helpers/api';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';

export default function MovieDetails() {
  const { movieID } = useParams();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [releaseYear, setReleaseYear] = useState();
  const [score, setScore] = useState();
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  const location = useLocation();
  const linkToGoBack = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieDetails(movieID).then(result => {
      console.log(result);
      setTitle(result.title);
      setImage(result.poster_path);
      setReleaseYear(new Date(result.release_date).getFullYear());
      setScore(Math.round(result.vote_average * 10));
      setOverview(result.overview);

      result.genres.map(({ name }) =>
        setGenres(prevName => [...prevName, name])
      );
    });
  }, [movieID]);

  return (
    <>
      <Link to={linkToGoBack.current}>Go back</Link>

      <h2>
        {title} ({releaseYear})
      </h2>
      <img src={`https://image.tmdb.org/t/p/w200/${image}`} alt="" />
      <p> User Score: {score}%</p>
      <h3>Overview </h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres.join(', ')}</p>
      <hr />
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <Outlet />
    </>
  );
}
