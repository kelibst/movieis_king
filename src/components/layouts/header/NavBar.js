import React, { Component } from 'react';
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';

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
    const { name, value } = e.target;
    this.setState({
      search: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid m-0 p-0">
        <nav className="navbar navbar-expand-lg justify-content-between navbar-light bg-black">
          <Link className="brand-primary text-whiteout" to="/">
            MOVIES
            <span className="brand-secondary">PALACE</span>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <ul className="navbar-nav align-items-center float-right">
            <form className="d-flex" onSubmit={this.handleSubmit}>
              <input
                type="text"
                className="form-control d-none d-sm-block"
                name="search"
                placeholder="Search Movie"
                onChange={this.handleChange}
              />
              <button className="btn search-btn">
                {' '}
                <Icofont icon="search" className="text-white" />
              </button>
            </form>

          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
