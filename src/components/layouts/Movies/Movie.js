/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import  url  from './urlGenerator';

const Movie = ({ movie }) => (
  <div className="card p-2 p-0 col-sm-4 col-lg-3 border-0">
    <Link to={`/movie/${movie.id}`}>
      <div className="card-img movies-img" style={{ backgroundImage: `url(${url(movie.poster_path)})` }}><h6 className="text-danger re_date">{movie.release_date}</h6></div>
      {' '}

    </Link>
    <div className="card-body bg-light-darken">
      <Link to={`/movie/${movie.id}`}><h4 className="card-title text-white">{movie.title}</h4></Link>
      
      
    </div>
  </div>
);

export default Movie;
