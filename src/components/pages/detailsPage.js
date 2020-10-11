import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMovie } from '../../store/actions/fetchAction';
import { url } from '../layouts/Movies/urlGenerator'
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;
class detailsPage extends Component {
    componentDidMount(){
        const id = this.props.match.params.movie_id;
        console.log(id)
        this.props.fetchMovie(id)
    }
    render(){
        const { data } = this.props.movie
        console.log("movie", data)
        const report = data ? (
            <div className="card col-md-6 mx-auto m-2 p-0 border-0">
                <div className="card-img movies-img" style={{backgroundImage: `url(${url(data.poster_path)})`}}>
                   
                </div>
                <div className="card-body" >
                    <h4 className="card-title text-dark">{data.title}</h4>
                    <p className="text-secondary">{data.overview}</p>data
                </div>
            </div>
        ) : (
            <div className="container">
                <h6 className="text-danger text-center">Sorry we could not load that movie</h6>
            </div>
        )
        console.log('mine', report)
         return (<div className="movieCotainer">
            {report}
         </div> )
    }
   
}
const mapStateToProps = (state) => {
    return {
        movie: state.movies.movie
    }
}


export default connect(mapStateToProps, { fetchMovie }) (detailsPage)
