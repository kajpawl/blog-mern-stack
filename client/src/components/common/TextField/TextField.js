import React from 'react';
import PropTypes from 'prop-types';

import './TextField.scss';

const TextField = ({ value, label, onChange, ...otherProps }) => (
  <label className="text-field">
    <span className={`text-field__label ${(!value.length > 0) ? 'text-field__label--big' : ''}`}>{label}</span>
    <input {...otherProps} value={value} onChange={onChange} className="text-field__input" />
  </label>
);

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextField;
