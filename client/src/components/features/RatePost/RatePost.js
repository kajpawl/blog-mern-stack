import React from 'react';
import { PropTypes } from 'prop-types';

import Button from '../../common/Button/Button';
import './RatePost.scss';

const RatePost = ({ ratePost, id, rate }) => (
  <div className="rating-post">
    <span>Rate this post:</span>
    <Button variant="info" onClick={() => ratePost('upvote', id)}>+</Button>
    { rate || 0 }
    <Button variant="info" onClick={() => ratePost('downvote', id)}>-</Button>
  </div>
);

RatePost.propTypes = {
  id: PropTypes.string.isRequired,
  rate: PropTypes.number,
  ratePost: PropTypes.func.isRequired,
};

export default RatePost;