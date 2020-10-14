/* eslint-disable */
import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { connect } from 'react-redux';
import { fetchMovie, fetchMovies } from '../../store/actions/fetchAction';
import url from '../layouts/Movies/urlGenerator';

class detailsPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.movie_id;
    const { movies } = this.props
    if(!movies.length){
      this.props.fetchMovies()
    }
    this.props.fetchMovie(id);
  }

  render() {
    const { data } = this.props.movie;
    console.log(data)
    const report = data ? (
      <div className="m-2 p-0 d-sm-flex border-0">
      <button type="button" className="btn btn-transparent text-white btn-icon"  onClick={()=> this.props.history.goBack()}><Icofont icon="bubble-left" className="icon-dark iconStyle" /></button>
        <div className="col-md-5 movie-img" style={{ backgroundImage: `url(${url(data.poster_path)})` }}><h6 className="text-danger re_date">{data.release_date}</h6></div>
        <div className="movie-body col-md-7 text-white">
          <h4 className="movie-title text-white">{data.title}</h4>
          <div className="genres">
            <h6>Genres</h6>
            {data.genres && data.genres.map(genre => {
              return (<button key={genre.id} className="btn btn-primary m-1 text-white">{genre.name}</button> )
            })}
          </div>
          <p className="text-white movie-overview">{data.overview}</p>
        </div>
      </div>
    ) : (
      <div className="container">
        <h6 className="text-danger text-center">We are loading that movie.</h6>
      </div>
    );

    return (
      <div className="container my-5 py-4">
        {report}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  movie: state.movies.movie,
  movies: state.movies.movies
});

export default connect(mapStateToProps, { fetchMovie, fetchMovies })(detailsPage);
