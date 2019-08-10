import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

  render() {
    const { postsCount } = this.props;

    return (
      <div className="PostsCounter">
      {postsCount ? 
        <div>Posts amount: {postsCount}</div>
      :
        <div>No posts found</div>
      }
      </div>
    )
  }
};


PostsCounter.propTypes = {
  postsCount: PropTypes.number.isRequired
};

export default PostsCounter;