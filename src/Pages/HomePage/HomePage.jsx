import { useEffect, useState } from 'react';
import { trendingMoviesToday } from '../../SearchMovieService';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function dataTrendingMovies() {
      try {
        const response = await trendingMoviesToday();
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.log({ error });
      }
    }
    dataTrendingMovies();
  }, []);

  return (
    <div>
      <p>Trending today</p>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
