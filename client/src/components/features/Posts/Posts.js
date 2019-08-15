import React from 'react';
import { PropTypes } from 'prop-types';

import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

  state = {
    initialPage: 1,
    postsNumber: this.props.postsPerPage || 10,
    pagination: this.props.pagination  === false ? false : true,
  }

  componentDidMount() {
    const { loadPostsByPage } = this.props;
    const { initialPage, postsNumber } = this.state;
    loadPostsByPage(initialPage, postsNumber);
  }

  loadPostPage = page => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
  }

  render() {
    const { pending, error, success } = this.props.request;
    const { posts, pages, ratePost } = this.props;
    const { loadPostPage } = this;
    const { pagination, } = this.state;

    return (
      <div>
        {(pending || !success) && <Spinner />}
        <ul>
          {!pending && success && posts && 
            <div>
              <PostsList posts={posts} ratePost={ratePost} />
            </div>
          }
        </ul>
        {!pending && error && <Alert variant="error">{error}</Alert>}
        {!pending && success && (posts.length === 0) && <Alert variant="info">No posts</Alert>}
        <Pagination pages={pages}
          onPageChange={loadPostPage}
          visible={pagination}
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
      rate: PropTypes.number,
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired,
  ratePost: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
  pages: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number,
  pagination: PropTypes.bool,
};

export default Posts;