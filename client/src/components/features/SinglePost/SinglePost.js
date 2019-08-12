import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Button from '../../common/Button/Button';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadSinglePost, match, loadRandomPost } = this.props;
    console.log(match);
    match !== 'random' ? loadSinglePost(match) : loadRandomPost();
  }

  render() {
    const { singlePost } = this.props;
    const { title, author, content } = this.props.singlePost;
    const { pending, error, success} = this.props.request;

    return (
      <div>
        {(pending || !success) && <Spinner />}
        {!pending && success && singlePost && 
          <div>
            <PageTitle>{title}</PageTitle> 
            <p className="post-author">Author: {author}</p>
            <HtmlBox className="post-content">{content}</HtmlBox>
            <Link to={'/posts'}>
              <Button variant="primary">
                Back to posts
              </Button>
            </Link>
          </div>
        }
        {!pending && error && <Alert variant="error">{error}</Alert>}
        {!pending && success && !singlePost && <Alert variant="info">Post not found</Alert>}
      </div>
    );
  }
};

SinglePost.propTypes = {
  singlePost: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
  }),
  request: PropTypes.object.isRequired,
  loadSinglePost: PropTypes.func.isRequired,
};

export default SinglePost;