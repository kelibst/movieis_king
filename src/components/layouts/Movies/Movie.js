import React from 'react'
import lionKing from '../../../assets/lionking.jpeg'
const Movie = ({movie}) => {
    return (
            <div className="card m-2 p-0 col-sm-4 col-lg-3 border-0">
                <div className="card-img movies-img" style={{backgroundImage: `url(${lionKing})`}}>
                   
                </div>
                <div className="card-body" >
                    <h4 className="card-title text-dark">{movie.title}</h4>
                </div>
            </div>
    )
}

export default Movie
