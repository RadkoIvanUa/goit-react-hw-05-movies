import axios from 'axios';
import { toast } from 'react-toastify';

const API_KEY = 'db647ca802bc56bfe4b5510b06bf37f2';
const BASE_URL = 'https://api.themoviedb.org/3/';

async function getTrendingMovies() {
  const response = await axios
    .get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`)
    .catch(function (error) {
      if (error.response) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else if (error.request) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      }
    });

  return response.data.results;
}

async function getMovieDetails(id) {
  const response = await axios
    .get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`)
    .catch(function (error) {
      if (error.response) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else if (error.request) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      }
    });

  return response.data;
}

async function getSearchMovies(query) {
  const response = await axios
    .get(`${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`)
    .catch(function (error) {
      if (error.response) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else if (error.request) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      }
    });

  return response.data.results;
}

async function getMovieCredits(id) {
  const response = await axios
    .get(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`)
    .catch(function (error) {
      if (error.response) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else if (error.request) {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      } else {
        toast.error(
          'Oops!!!Something went wrong, please reload the page and try again'
        );
      }
    });

  return response.data;
}

export { getTrendingMovies, getMovieDetails, getSearchMovies, getMovieCredits };
