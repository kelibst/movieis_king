import React from 'react';
import PropTypes from 'prop-types';
import Icofont from 'react-icofont';
import './iconAnimation.scss';

const ErRors = props => {
  const { err } = props;
  const errorIcon = {
    fontSize: '4rem',
  };
  return (
    <div className="col my-5 text-center">
      <div className="rotate-center">
        <Icofont icon="nerd-smile" style={errorIcon} className="error-icon text-danger" />
      </div>
      <h4 className="text-danger pt-4 font-weight-bolder">{err}</h4>
    </div>
  );
};

ErRors.propTypes = {

};

export default ErRors;
