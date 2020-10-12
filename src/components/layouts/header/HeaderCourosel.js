import React from 'react'
import './HeaderCourosel.scss'
import lionKing from '../../../assets/lionking.jpeg'
import HeaderTitle from './HeaderTitle'
import { connect } from 'react-redux'
import { url } from '../Movies/urlGenerator'

const HeaderCourosel = ({movies}) => {
    console.log(" courosel movies ", movies)
    return (
        <div id="headercourosels" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#headercourosels" data-slide-to="0" className="active"></li>
                {movies && movies.map ((movie, ind ) => {
                    if(url(movie.backdrop_path)){
                          return (
                            <li data-target="#headercourosels" key={movie.id} data-slide-to={movie.id}></li>  
                        )
                    }
                  })}
            </ol>

        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={lionKing} alt="First slide" />
            </div>
                {movies && movies.map((movie) => {
                    if(url(movie.backdrop_path)){
                        return(
                            <div className="carousel-item" key={movie.id}>
                                <img className="d-block w-100" src={url(movie.backdrop_path) ? url(movie.backdrop_path) : lionKing} alt={movie.id} />
                                <HeaderTitle movie={movie} key={movie.id}/>
                            </div>)
                            
                    } 
                })}
        </div>
        <a className="carousel-control-prev" href="#headercourosels" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#headercourosels" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
        </a>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        movies: state.movies.movies
    }
}
export default connect(mapStateToProps, null)(HeaderCourosel)
