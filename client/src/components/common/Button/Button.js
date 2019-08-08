import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ variant = '', children, ...otherProps }) => (
  <button { ...otherProps } className={ `button button--${variant}`}>
    { children }
  </button>
);

Button.propTypes = {
  variant: PropTypes.string.isRequired,
};

export default Button;
