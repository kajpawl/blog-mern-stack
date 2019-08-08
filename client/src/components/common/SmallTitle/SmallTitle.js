import React from 'react';
import PropTypes from 'prop-types';
import './SmallTitle.scss';

const SmallTitle = ({ children, ...otherProps }) => (
  <h2 {...otherProps} className="small-title">
    { children }
  </h2>
);

SmallTitle.propTypes = {
  children: PropTypes.string,
};

export default SmallTitle;
