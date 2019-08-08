import React from 'react';
import { Animated } from 'react-animated-css';

import './Spinner.scss';

const Spinner = () => (
  <Animated animationIn="fadeIn" animationOut="fadeOut">
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </Animated>
);

export default Spinner;
