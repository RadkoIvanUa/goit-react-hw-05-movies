import { useParams } from 'react-router-dom';

export default function MovieDetails() {
  const { movieID } = useParams();
  return <div to={movieID}>Movie Details{movieID}</div>;
}
