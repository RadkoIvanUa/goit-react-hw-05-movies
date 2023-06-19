import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [trendingMoviesArr, setTrendingMoviesArr] = useState([]);

  useEffect(() => {
    axios(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=db647ca802bc56bfe4b5510b06bf37f2'
    ).then(resp => setTrendingMoviesArr([...resp.data.results]));
  }, []);

  return (
    <ul>
      {trendingMoviesArr.map(trendingMovie => (
        <li key={trendingMovie.id}>
          <Link to={`${trendingMovie.id}`}>{trendingMovie.title}</Link>
        </li>
      ))}
    </ul>
  );
}
