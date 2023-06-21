import { getMovieDetails } from 'helpers/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { ThreeDots, Puff } from 'react-loader-spinner';

export default function MovieDetails() {
  const { movieID } = useParams();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [releaseYear, setReleaseYear] = useState();
  const [score, setScore] = useState();
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [isMovieDataLoading, setIsMovieDataLoading] = useState(false);

  const location = useLocation();
  const linkToGoBack = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    setIsMovieDataLoading(true);
    getMovieDetails(movieID)
      .then(resp => {
        const result = resp.data;
        setTitle(result.title);
        setImage(result.poster_path);
        setReleaseYear(new Date(result.release_date).getFullYear());
        setScore(Math.round(result.vote_average * 10));
        setOverview(result.overview);

        result.genres.map(({ name }) =>
          setGenres(prevName => [...prevName, name])
        );
      })
      .finally(() => {
        setIsMovieDataLoading(false);
      });
  }, [movieID]);

  return (
    <>
      <Link to={linkToGoBack.current}>Go back</Link>

      {isMovieDataLoading ? (
        <Puff
          height="80"
          width="80"
          radius="9"
          color="orange"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <>
          <h2>
            {title} ({releaseYear})
          </h2>
          <img
            src={`https://image.tmdb.org/t/p/w200/${image}`}
            alt=""
            width="200px"
            height="300px"
          />
          <p> User Score: {score}%</p>
          <h3>Overview </h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres.join(', ')}</p>
        </>
      )}

      <hr />
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
      <br />
      <Link to="reviews">Reviews</Link>

      <Suspense
        fallback={
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="orange"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
}
