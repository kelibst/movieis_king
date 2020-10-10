import React from 'react'
import { url } from './urlGenerator'
const Movie = ({movie}) => {
    return (
            <div className="card m-2 p-0 col-sm-4 col-lg-3 border-0">
                <div className="card-img movies-img" style={{backgroundImage: `url(${url(movie.poster_path)})`}}>
                   
                </div>
                <div className="card-body" >
                    <h4 className="card-title text-dark">{movie.title}</h4>
                </div>
            </div>
    )
}

export default Movie