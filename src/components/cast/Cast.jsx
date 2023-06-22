import { getMovieCredits } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { StyledCast } from './StyledCast';

export default function Cast() {
  const { movieID } = useParams();

  const [castArr, setCastArr] = useState([]);
  const [isHaveCastInfo, setIsHaveCastInfo] = useState(true);

  useEffect(() => {
    getMovieCredits(movieID).then(resp => {
      if (resp.data.cast.length === 0) {
        setIsHaveCastInfo(false);
        toast.info('We don`t have any info about cast of this movie');
        return;
      }
      setCastArr([...resp.data.cast]);
    });
  }, [movieID]);

  useEffect(() => {
    document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
  }, [castArr]);

  return isHaveCastInfo ? (
    <StyledCast>
      {castArr.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          {profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt="Actor"
              width="200px"
              height="300px"
            />
          ) : (
            <img
              src="https://i.imgur.com/2OVME7K.png"
              alt="Actor"
              width="200px"
              height="300px"
            />
          )}

          <div>
            <h3>{name}</h3>
            <h5>{character}</h5>
          </div>
        </li>
      ))}
    </StyledCast>
  ) : (
    <ToastContainer />
  );
}
