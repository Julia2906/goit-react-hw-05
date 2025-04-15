import { Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import MoviesPage from '../Pages/MoviesPage';
import NotFoundPage from '../Pages/NotFoundPage';
import Navigation from '../components/Navigation/Navigation';

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
export default App;
