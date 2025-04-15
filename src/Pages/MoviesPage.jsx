import { useEffect, useState } from 'react';
import { fetchMovie } from '../SearchMovieService';
import MovieList from '../components/MovieList/MovieList';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchMovie();
        setMovies(data);
      } catch (error) {}
    }

    getMovies();
  }, []);

  return <div>{movies.length > 0 && <MovieList movies={movies} />}</div>;
};

export default MoviesPage;
