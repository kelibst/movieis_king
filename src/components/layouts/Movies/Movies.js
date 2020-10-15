/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import { fetchMovies } from '../../../store/actions/fetchAction';
import './Movies.scss';
import MoviesForm from './moviesForm';


import PropTypes from 'prop-types'
import Loading from '../../../containers/Loading';

class Movies extends Component {
  
  componentDidMount() {
    this.props.fetchMovies('DISCOVER', 2);
  }

    render() {
      console.log('page loaded')
      const { movies } = this.props;
      const loadContent = movies.length ? (
        <section className="container-fluid">
          <div className="movies-container my-4 py-3">
            <MoviesForm />

            <div className="grid-container m-0">
              {movies && movies.map(movie => (
                <Movie movie={movie} key={movie.id} />))}
              {movies ? '' : (<button className="btn btn-primary" onClick={this.props.fetchMovies()}>Load Movies</button>)}
            </div>
          </div>
        </section>
      ): (<Loading />)
      return loadContent ;
    }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
});
  // Movies.propTypes = {
  //   movies: PropTypes.func.isRequired,
  //   // completed: PropTypes.bool.isRequired,
  //   // text: PropTypes.string.isRequired
  // }
export default connect(mapStateToProps, { fetchMovies })(Movies);
