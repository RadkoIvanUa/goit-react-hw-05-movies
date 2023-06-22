import { getMovieReviews } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { StyledReviews } from './StyledReviews';

export default function Reviews() {
  const { movieID } = useParams();
  const [reviewsArr, setReviewsArr] = useState([]);
  const [isHaveReviews, setIsHaveReviews] = useState(true);

  useEffect(() => {
    getMovieReviews(movieID).then(resp => {
      if (resp.data.total_results === 0) {
        setIsHaveReviews(false);
        toast.info('We don`t have any reviews for this movie');
        return;
      }
      setReviewsArr([...resp.data.results]);
    });
  }, [movieID]);

  useEffect(() => {
    document.getElementById('scroll').scrollIntoView({ behavior: 'smooth' });
  }, [reviewsArr]);

  return isHaveReviews ? (
    <StyledReviews>
      {reviewsArr.map(({ author, content, id }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </StyledReviews>
  ) : (
    <ToastContainer />
  );
}
