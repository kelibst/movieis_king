/* eslint-disable */
import React, { Component, createContext } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../../store/actions/fetchAction';

const categories = [
  'DISCOVER',
  'UPCOMING',
  'POPULAR',
  'TRENDING',
];



const catDropDown = categories.map(category => (
  <option key={category} value={category}>
    {category}
  </option>
));

class MoviesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: categories[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'category') {
      this.setState({
        category: value,
      });
      this.props.fetchMovies(value);
    }
  }

  render() {
    return (
      <div>
        <h3 className="movies-header">{this.state.category}</h3>
        <form className="form-row mt-5 py-5" onSubmit={this.handleChange}>
          <div className="col">
            <select className="form-control" value={this.state.category} name="category" onChange={this.handleChange}>
              <option value="" disabled>
                Category
              </option>
              {catDropDown}
            </select>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(null, { fetchMovies })(MoviesForm);
