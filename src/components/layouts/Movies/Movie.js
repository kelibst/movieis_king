/* eslint-disable no-nested-ternary */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ErRors from '../../../containers/ErRors';
import Loading from '../../../containers/Loading';
import url from './urlGenerator';

const Movie = ({ movie, errors }) => {
  const movieDetails = movie ? (
    <div className="card p-0 border-0">
      <Link to={`/movie/${movie.id}`}>
        <div className="card-img movies-img" style={{ backgroundImage: `url(${url(movie.poster_path)})` }}><h6 className="text-danger re_date">{movie.release_date}</h6></div>
        {' '}

      </Link>
      <div className="card-body bg-light-darken">
        <Link to={`/movie/${movie.id}`}><h4 className="card-title text-white">{movie.title}</h4></Link>
      </div>
    </div>
  ) : (
    errors ? <ErRors err={errors} /> : <Loading />
  );

  return (
    movieDetails
  );
};

const mapStateToProps = state => ({
  errors: state.error.err,
});

export default connect(mapStateToProps, null)(Movie);
