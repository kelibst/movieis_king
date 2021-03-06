/* eslint-disable  react/destructuring-assignment */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { connect } from 'react-redux';
import ErRors from '../../containers/ErRors';
import Loading from '../../containers/Loading';
import { fetchMovie, fetchMovies } from '../../store/actions/fetchAction';
import Iframer from '../layouts/Movies/Iframer';
import url from '../layouts/Movies/urlGenerator';

class detailsPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.movie_id;
    const { movies } = this.props;
    if (!movies.length) {
      this.props.fetchMovies();
    }
    this.props.fetchMovie(id);
  }

  render() {
    const { data } = this.props.movie;
    const { errors } = this.props;
    const report = data ? (
      <div className="m-2 p-0 d-sm-flex border-0">
        <button type="button" className="btn btn-transparent text-white btn-icon" onClick={() => this.props.history.goBack()}>
          {' '}
          <i className="d-none">Back</i>
          <Icofont icon="bubble-left" className="icon-dark iconStyle" />
        </button>
        <div className="col-md-5 movie-img" style={{ backgroundImage: `url(${url(data.poster_path)})` }}>
          <h6 className="text-danger re_date">{data.release_date}</h6>
          {data.homepage ? (<a href={data.homepage} target="_blank" rel="noreferrer" className="btn btn-outline-success homepage text-white">Homepage</a>) : ('') }
        </div>
        <div className="movie-body col-md-7 text-white">
          <h4 className="movie-title text-white">{data.title}</h4>
          <div className="genres my-3">
            <h6>Genres</h6>
            {data.genres && data.genres.map(genre => (<button key={genre.id} type="button" className="btn btn-primary m-1 text-white">{genre.name}</button>))}

            {!data.genres ? (<p className="text-secondary">No Genre for this movie</p>) : ''}

          </div>
          <p className="text-white movie-overview">{data.overview}</p>

          <h4 className="text-white mb-3">Trailers</h4>
          <div className="videos d-sm-flex">
            {data.videos.results && data.videos.results.map(video => (
              <Iframer video={video} key={video.key} />
            ))}
          </div>
        </div>

      </div>
    ) : (
      <div className="container">
        { errors ? <ErRors err={errors} /> : <Loading />}
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
  movies: state.movies.movies,
  errors: state.error.err,
});

detailsPage.propTypes = {
  match: PropTypes.shape.isRequired,
  movie: PropTypes.shape.isRequired,
  movies: PropTypes.shape.isRequired,
  fetchMovies: PropTypes.func.isRequired,
  fetchMovie: PropTypes.func.isRequired,
  errors: PropTypes.shape.isRequired,
  history: PropTypes.shape.isRequired,
};

export default connect(mapStateToProps, { fetchMovie, fetchMovies })(detailsPage);
