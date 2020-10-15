import React from 'react'
import PropTypes from 'prop-types'

const Iframer = props => {
    const {video} = props
    console.log(video)
    return (
        <div className="col col-md-6 my-5">
            <iframe src={`https://www.youtube.com/embed/${video.key}`} 
            width="100%" height="100%" allowFullScreen={true} />
        </div>
    )
}

Iframer.propTypes = {

}

export default Iframer
