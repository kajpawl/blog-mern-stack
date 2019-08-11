import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

const HtmlBox = ({ children, ...otherProps }) => (
  <div {...otherProps} className="html-box">
    {ReactHtmlParser(children)}
  </div>
);

HtmlBox.propTypes ={
  children: PropTypes.string,
};

export default HtmlBox;