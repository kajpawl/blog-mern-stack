import React from 'react';
import { PropTypes } from 'prop-types';

import PostSummary from '../PostSummary/PostSummary';

const PostsList = ({ posts, ratePost }) => (
  <div>
    <section className="posts-list">
      {posts ? posts.map(post => <PostSummary key={post.id} {...post} ratePost={ratePost} />) : null}
    </section>
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      rate: PropTypes.number,
    })
  ),
  ratePost: PropTypes.func.isRequired,
};

export default PostsList;