import { getMovieReviews } from 'helpers/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieID } = useParams();
  const [reviewsArr, setReviewsArr] = useState([]);

  useEffect(() => {
    getMovieReviews(movieID).then(resp => {
      if (resp.data.results.lengtn === 0) return;
      console.log(resp);
      setReviewsArr([...resp.data.results]);
    });
  }, [movieID]);

  return reviewsArr.length !== 0 ? (
    <ul>
      {reviewsArr.map(({ author, content, id }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don`t have any reviews for this movie</p>
  );
}
