/* eslint-disable no-unused-expressions */

import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import searchError from '../../../store/actions/errorAction';
import { searchMovie } from '../../../store/actions/fetchAction';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      search: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { search } = this.state;
    const { searchMovie, searchError } = this.props;
    const message = 'Phew! trying to break my app? Your search input is empty!';
    search.length ? (searchMovie(search)) : (
      searchError(message)
    );
    this.setState({
      search: '',
    });
  }

  render() {
    const { search } = this.state;
    return (
      <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-expand-lg justify-content-between navbar-light bg-black">
          <a className="brand-primary text-whiteout" href="/">
            MOVIES
            <span className="brand-secondary">PALACE</span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-white" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center navbar-light float-right">
              <li className="nav-item active">
                <a href="/findby" className="nav-link text-white mx-2">Order By</a>
              </li>

              <form className="d-flex" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  className="form-control"
                  name="search"
                  placeholder="Search Movie"
                  onChange={this.handleChange}
                  value={search}
                />
                <button type="submit" className="btn search-btn" onSubmit={this.handleSubmit}>
                  {' '}
                  <Icofont icon="search" className="text-white" />
                </button>
              </form>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

NavBar.propTypes = {
  searchError: PropTypes.func.isRequired,
  searchMovie: PropTypes.func.isRequired,
};

export default connect(null, { searchMovie, searchError })(withRouter(NavBar));
