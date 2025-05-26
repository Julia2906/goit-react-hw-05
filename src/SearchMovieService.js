import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const trendingMoviesToday = async () => {
  return await axios.get('/trending/movie/day', {
    headers: { accept: 'application/json', Authorization: `Bearer ${apiKey}` },
  });
};

export const castMovie = async movieId => {
  return await axios.get(`/movie/${movieId}/credits`, {
    headers: { accept: 'application/json', Authorization: `Bearer ${apiKey}` },
  });
};

export const reviewsMovie = async movieId => {
  return await axios.get(`/movie/${movieId}/reviews`, {
    headers: { accept: 'application/json', Authorization: `Bearer ${apiKey}` },
  });
};

export const searchMovie = async query => {
  return await axios.get(`/search/movie`, {
    params: { query },
    headers: { accept: 'application/json', Authorization: `Bearer ${apiKey}` },
  });
};

export const ItemMovieBaseUrl = 'https://image.tmdb.org/t/p/';
export const ItemMovieBaseSize = 'w300/';
export const CastBaseSize = 'w92';

export const ItemMovieDetails = async movieId => {
  return await axios.get(`/movie/${movieId}`, {
    headers: { accept: 'application/json', Authorization: `Bearer ${apiKey}` },
  });
};
