/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import { fetchMovies } from '../../../store/actions/fetchAction';
import './Movies.scss';
import MoviesForm, { CatNameContext } from './moviesForm';



class Movies extends Component {
  static contextType = CatNameContext
  componentDidMount() {
    this.props.fetchMovies('DISCOVER', 2);
  }

    

    render() {
      const { movies } = this.props;

      return (
        <CatNameContext.Consumer>
          {context => {
            return (
              <section className="container-fluid">
                <div className="movies-container my-4 py-3">
                  <MoviesForm />

                  <div className="row m-0">
                    {movies && movies.map(movie => (
                      <Movie movie={movie} key={movie.id} />))}
                    {movies ? '' : (<button className="btn btn-primary" onClick={this.props.fetchMovies()}>Load Movies</button>)}
                  </div>
                </div>
              </section>
            );
          }}

        </CatNameContext.Consumer>
      );
    }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps, { fetchMovies })(Movies);
