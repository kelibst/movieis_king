import React from 'react'
import PropTypes from 'prop-types'
import genres from '../../store/genres'


const genreDropDown = genres.genres.map(genre => (
    <option key={genre.id} value={genre.value}>
      {genre.value}
    </option>
  ));

const filterPage = props => {
    const handleChange = (e) =>{
        const {name, value } = e.target;
        console.log(name, value)
    }
    return (
    <div>
        <h3 className="movies-header">Filter Movies by Genre</h3>
        <form className="form-row mt-5 py-5" onSubmit={handleChange}>
          <div className="col">
            <select className="form-control" name="genre" onChange={handleChange}>
              <option value="" disabled>
                Genres
              </option>
              {genreDropDown}
            </select>
          </div>
        
    </form>
    </div>
)
}

filterPage.propTypes = {

}

export default filterPage
