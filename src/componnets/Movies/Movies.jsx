import React from 'react'
import './Movies.css'
import { NavLink } from 'react-router-dom';

const IMG_URL = "https://image.tmdb.org/t/p/w300/";
const Movies = ({ movie }) => {

  return (
    <div className='movies'>
      <h5>{movie.title}</h5>
      <NavLink to={`/${movie.id}`}>
        <img src={IMG_URL + movie.poster_path} />
      </NavLink>
    </div>
  )
}

export default Movies