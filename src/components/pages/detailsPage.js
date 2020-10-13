/* eslint-disable */
import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { connect } from 'react-redux';
import { fetchMovie } from '../../store/actions/fetchAction';
import url from '../layouts/Movies/urlGenerator';

class detailsPage extends Component {
  componentDidMount() {
    const id = this.props.match.params.movie_id;
    this.props.fetchMovie(id);
  }

  render() {
    const { data } = this.props.movie;
    const report = data ? (
      <div className="m-2 p-0 d-sm-flex border-0">
      <button className="btn btn-transparent text-white btn-icon"  onClick={()=> this.props.history.goBack()}><Icofont icon="bubble-left" className="icon-dark iconStyle" /></button>
        <div className="col-md-5 movie-img" style={{ backgroundImage: `url(${url(data.poster_path)})` }} />
        <div className="movie-body col-md-7 text-white">
          <h4 className="movie-title text-white">{data.title}</h4>
          <p className="text-white movie-overiew text-center">{data.overview}</p>
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
});

export default connect(mapStateToProps, { fetchMovie })(detailsPage);
