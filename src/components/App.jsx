import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Navigation = lazy(() => import('./Navigation/Navigation'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../Pages/MovieDetailsPage/MovieDetailsPage')
);
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
