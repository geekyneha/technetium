import React from 'react';
import styles from './movie.module.css'
import { toggleLike } from '../../redux/MovieSlice';
import { useDispatch } from 'react-redux';

const Movie = ({ id,title, poster, details,  }) => {
  const dispatch = useDispatch()

  const handleToggleLike = () => {
    dispatch(toggleLike({ movieId: id, liked: true }));
  };
  return (
  
      <div className={styles.movie}>
      <img className={styles.poster} src={poster} alt={title} />
      <div className={styles.details}>
        <h3>{title}</h3>
        <p>{details}</p>
        <div className={styles.hovercontent}>
          <button className={styles.watchbutton}>watch Now</button>

          <p>Season: season</p>
          <p>description</p>
          <button className={styles.like} onClick={handleToggleLike}>Liked</button>
        </div>
      </div>
    </div>
   
  
  );
};

export default Movie;
