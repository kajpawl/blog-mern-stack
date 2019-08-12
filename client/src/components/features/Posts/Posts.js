import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  loadPostPage = page => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  }

  render() {
    const { pending, error, success } = this.props.request;
    const { posts, pages } = this.props;
    const { loadPostPage } = this;

    return (
      <div>
        {(pending || !success) && <Spinner />}
        <ul>
          {!pending && success && posts && 
            <div>
              <PostsList posts={posts} />
            </div>
          }
        </ul>
        {!pending && error && <Alert variant="error">{error}</Alert>}
        {!pending && success && (posts.length === 0) && <Alert variant="info">No posts</Alert>}
        <Pagination pages={pages}
          onPageChange={loadPostPage}
        />
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
      author: PropTypes.string.isRequired,
    })
  ),
  request: PropTypes.object.isRequired,
  pages: PropTypes.number.isRequired,
  loadPostsByPage: PropTypes.func.isRequired,
};

export default Posts;