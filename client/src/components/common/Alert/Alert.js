import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-animated-css';
import { MdInfoOutline, MdDone, MdErrorOutline } from 'react-icons/md';

import './Alert.scss';

const Alert = ({ variant = '', children, ...otherProps }) => {

  const icon = () => {
    switch(variant) {
      case 'info':
        return <MdInfoOutline />
      case 'success':
        return <MdDone />
      case 'warning':
        return <MdErrorOutline />
      case 'error':
        return <MdErrorOutline />
      default:
        return <MdInfoOutline />
    }
  };

  return (
    <Animated animationIn="fadeIn" animationOut="fadeOut">
      <div {...otherProps} className={`alert alert--${variant}`}>
        {icon()}
        <span className="alert__desc">{children}</span>
      </div>
    </Animated>
  )

};

Alert.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default Alert;
