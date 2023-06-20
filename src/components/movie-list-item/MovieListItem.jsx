import { Link } from 'react-router-dom';

export default function MovieListItem({ id, title, location }) {
  return location.pathname === '/movies' ? (
    <li>
      <Link to={`${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  ) : (
    <li>
      <Link to={`movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
}
