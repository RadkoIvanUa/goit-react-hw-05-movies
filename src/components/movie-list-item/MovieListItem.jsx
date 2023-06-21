import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
