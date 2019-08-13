import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { BASE_URL } from '../../../config';

import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Button from '../../common/Button/Button';

class SinglePost extends React.Component {

  state = {
    isMounted: false,
  }

  componentDidMount() {
    const { loadSinglePost, match, loadRandomPost } = this.props;
    match !== 'random' ? loadSinglePost(match) : loadRandomPost();
    this.setState({ isMounted: true });
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  render() {
    const { singlePost, location } = this.props;
    const { title, author, content } = this.props.singlePost;
    const { pending, error, success } = this.props.request;
    const { isMounted } = this.state;

    return (
      <div>
        {(pending || !success) && <Spinner />}
        {!pending && success && singlePost && 
          <div>
            <PageTitle>{title}</PageTitle> 
            <p className="post-author">Author: {author}</p>
            <HtmlBox className="post-content">{content}</HtmlBox>
            {isMounted &&
            <FacebookProvider appId="903746783320802">
              <Comments href={`${BASE_URL}/${location.pathname}`} />
              <Link to={'/posts'}>
                <Button variant="primary">
                  Back to posts
                </Button>
              </Link>
              <ShareButton className="button button--primary" href={`${BASE_URL}/${location.pathname}`}>
                Share on Facebook
              </ShareButton>
            </FacebookProvider>
            }
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