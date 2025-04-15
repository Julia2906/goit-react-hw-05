import axios from 'axios';

const API_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZjRlYTFhNWQ0Y2Q4ZjJjYzBmOTZmNGQ0YzY0ZSIsIm5iZiI6MTc0NDIxODg5OC4xMTAwMDAxLCJzdWIiOiI2N2Y2YWIxMmVhODBkODUxNzU5OTNhMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.oKTyEk8ckoVTPHxN0g1QlVeO09e98owh3x7O2NN-AAI';

const url = 'https://api.themoviedb.org/3';

const options = {
  headers: {
    Authorization: API_TOKEN,
  },
};

export const fetchMovie = async () => {
  const response = await axios
    .get(url, options)
    .then(response => console.log(response))
    .catch(err => console.error(err));
};
