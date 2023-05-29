
import React from 'react';
import { useSelector } from 'react-redux';

const Fvrt = () => {
  const favorites = useSelector((state) => state.movies.favorites);
  console.log(favorites)

  return (
    <div>
      <h1>Favorite Movies</h1>
      {favorites.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <img src={movie.poster} alt={movie.title} />
          <p>{movie.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Fvrt;
