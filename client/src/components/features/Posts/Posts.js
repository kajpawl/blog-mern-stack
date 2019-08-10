import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { posts } = this.props;
    const { pending, error, success} = this.props.request;

    return (
      <div>
        <ul>
          {(pending || !success) && <Spinner />}
          {!pending && success && posts.length && <PostsList posts={posts} />}
          {!pending && error && <Alert variant="error">{error}</Alert>}
          {!pending && success && (posts.length === 0) && <Alert variant="info">No posts</Alert>}
        </ul>
      </div>
    );
  }
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  request: PropTypes.object.isRequired,
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;