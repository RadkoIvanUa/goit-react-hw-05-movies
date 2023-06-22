import { getMovieDetails } from 'helpers/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  useParams,
  useLocation,
  Outlet,
  NavLink,
} from 'react-router-dom';
import { ThreeDots, Puff } from 'react-loader-spinner';

import Details from 'components/movie-details/Details';
import styled from '@emotion/styled';

const GoBackLink = styled(NavLink)`
  font-size: 20px;
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  transition: all 0.4s;
  margin-bottom: 20px;

  :hover {
    color: orange;
  }
  :after,
  :before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  :before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  :after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  :hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  :hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  :active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
`;

export default function MovieDetailsPage() {
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
      <GoBackLink to={linkToGoBack.current}>Go back</GoBackLink>

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
        <Details
          title={title}
          releaseYear={releaseYear}
          score={score}
          image={image}
          overview={overview}
          genres={genres}
        />
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
