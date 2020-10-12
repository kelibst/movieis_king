import React, { Component } from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import { fetchMovies } from '../../../store/actions/fetchAction'
import './Movies.scss'
import  MoviesForm, { CatNameContext } from './moviesForm'


class Movies extends Component {
    
    componentDidMount(){
        this.props.fetchMovies('DISCOVER', 2)
    }

    static contextType = CatNameContext
    render(){
        const { movies } = this.props
       
        return (
        <CatNameContext.Consumer>{(context) => {
            console.log(context)
        return(<section className="container-fluid">
            <div className="movies-container my-4 py-3">
                <MoviesForm/>
                
                <div className="row m-0">
                {movies && movies.map(movie => {
                    return  (
                        <Movie movie={movie} key={movie.id}/>)
                })} 
                {movies ? '' : (<button className="btn btn-primary" onClick={ this.props.fetchMovies()}>Load Movies</button> )}
                </div>
            </div>
        </section>)
        }}
        
        </CatNameContext.Consumer>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies.movies
    }
}


export default connect(mapStateToProps, { fetchMovies }) (Movies)
