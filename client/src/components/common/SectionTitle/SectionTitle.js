import React from 'react';
import PropTypes from 'prop-types';

import './SectionTitle.scss';

const SectionTitle = ({ children }) => (
  <h2 className="section-title">
     {children}
  </h2>
);

SectionTitle.propTypes = {
  children: PropTypes.string,
};

export default SectionTitle;
