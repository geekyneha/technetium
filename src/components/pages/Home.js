import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovies } from '../../redux/MovieSlice';
import Movie from './Movie';

const Home = () => {
  const movieState = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <div className="movie-list">
      {movieState.movies.map((movie) => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          details={movie.Year}
        />
      ))}
    </div>
  );
};

export default Home;
