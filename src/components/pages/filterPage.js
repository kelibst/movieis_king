import React from 'react'
import PropTypes from 'prop-types'
import genres from '../../store/genres'
import { connect } from 'react-redux'
import { fetchMovies, filterMovies } from '../../store/actions/fetchAction'
import Movie from '../layouts/Movies/Movie'
import Loading from '../../containers/Loading'

const filterPage = props => {
    const { movies, filMovies, filterMovies, fetchMovies } = props
    if(!movies.length){
        fetchMovies('POPULAR')
    }

    const handleChange = (e) =>{
        const { name, id } = e.target
        const filMovie = [];
       movies.filter(movie => {
            movie.genre_ids.map(movieid => {
               if(movieid == id){
                    filMovie.push(movie)
               }
           })
       })
        filterMovies(filMovie)
    }


    return (
    <div className="container">
        <h3 className="movies-header">Filter Movies by Genre</h3>
        { genres.genres.map(genre => (
           <button type ="button" className="btn btn-primary m-2" onClick={handleChange} name={genre.name} id={genre.id} key={genre.id}>{genre.name}</button>
        )) 
        }

        <div className="movies row">
            { filMovies.length ? (
                filMovies && filMovies.map(movie => {
                    return (<Movie movie={movie} key={movie.id} />)
                })
            ) : ( (
                <div className="container my-5">
                    <h4 className="text-danger text-center">Select a Genre to see related movies</h4>
                    <Loading />
                </div>
            ))}
            
        </div>
    </div>
)
}

filterPage.propTypes = {

}

const mapStateToProps = state => ({
    movies: state.movies.movies,
    filMovies: state.movies.filter
});

export default connect(mapStateToProps, { fetchMovies, filterMovies  })(filterPage)