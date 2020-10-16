/* eslint-disable */
import React, { Component } from "react";
import { connect } from "react-redux";
import Movie from "./Movie";
import { fetchMovies } from "../../../store/actions/fetchAction";
import "./Movies.scss";
import MoviesForm from "./moviesForm";

import PropTypes from "prop-types";
import Loading from "../../../containers/Loading";

class Movies extends Component {
  componentDidMount() {
    this.props.fetchMovies("DISCOVER", 2);
  }

  render() {
    const { movies, searchMove, errors } = this.props;
    const searchResult = searchMove.length ? (
      <div className="results">
        <h4 className="text-center text-light">Search Results</h4>
        <div className="grid-container mt-5">
          {searchMove &&
            searchMove.map((search) => (
              <Movie movie={search} key={search.id} />
            ))}
          <hr />
        </div>
      </div>
    ) : (
      <div className="col my-5">
        <h4 className="text-danger text-center font-weight-bolder">{errors}</h4>
      </div>
    );
    const loadContent = movies.length ? (
      <section className="container-xl">
        <div className="movies-container my-4 py-3">
          {searchResult}
          <MoviesForm />

          <div className="grid-container m-0">
            {movies &&
              movies.map((movie) => <Movie movie={movie} key={movie.id} />)}
            {movies ? (
              ""
            ) : (
              <button
                className="btn btn-primary"
                onClick={this.props.fetchMovies()}
              >
                Load Movies
              </button>
            )}
          </div>
        </div>
      </section>
    ) : (
      <Loading />
    );
    return loadContent;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  searchMove: state.movies.search,
  errors: state.error.err
});
Movies.propTypes = {
  movies: PropTypes.shape.isRequired,
  fetchMovies: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { fetchMovies })(Movies);
