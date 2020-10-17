import React from 'react';
import PropTypes from 'prop-types';

const Iframer = props => {
  const { video } = props;
  return (
    <div className="col col-md-6 my-5">
      <iframe
        title={video.name}
        src={`https://www.youtube.com/embed/${video.key}`}
        width="100%"
        height="100%"
        allowFullScreen
      />
    </div>
  );
};

Iframer.propTypes = {
  video: PropTypes.shape.isRequired,
};

export default Iframer;
