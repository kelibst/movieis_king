import React, { Component } from 'react'
import { connect } from 'react-redux'
import Movie from './Movie'
import './Movies.scss'


class Movies extends Component {
   
    
    render(){
        const { movies } = this.props
       
        return (
        <section className="container-fluid">
            <div className="movies-container my-4 py-3">
                <h3 className="movies-header">Recent</h3>
                <div className="row m-0">
                {movies && movies.map(movie => {
                    return  (<Movie movie={movie} key={movie.id}/>)
                })} 
                </div>
            </div>
        </section>
        )
    }
    
}

export default (Movies)
