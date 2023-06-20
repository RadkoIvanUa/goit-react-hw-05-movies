import Home from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';
import Cast from './cast/Cast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
