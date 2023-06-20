import { getMovieCredits } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Cast() {
  const { movieID } = useParams();

  const [castArr, setCastArr] = useState([]);

  useEffect(() => {
    getMovieCredits(movieID).then(result => setCastArr([...result.cast]));
  }, [movieID]);

  return (
    <>
      <ul>
        {castArr.map(({ profile_path, name, character, id }) => (
          <li key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt=""
              />
            ) : (
              <img
                src="https://i.imgur.com/JQ8ngUd.png"
                alt=""
                width="200px"
                height="300px"
              />
            )}

            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
