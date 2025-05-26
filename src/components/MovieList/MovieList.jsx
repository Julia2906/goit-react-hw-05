import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ collection }) {
  const location = useLocation();
  return (
    <ul>
      {collection.map(({ id, title }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
