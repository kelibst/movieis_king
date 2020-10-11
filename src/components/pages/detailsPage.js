import React from 'react'

const detailsPage = () => {
    return (
        <div className="container">
                <div className="card md-6 mx-auto m-2 p-0 border-0">
                <div className="card-img movies-img" style={{backgroundImage: `url(${url(movie.poster_path)})`}}>
                   
                </div>
                <div className="card-body" >
                    <h4 className="card-title text-dark">{movie.title}</h4>
                    <p className="text-secondary">{movie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default detailsPage
