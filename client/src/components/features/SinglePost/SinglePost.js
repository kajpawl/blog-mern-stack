import React from 'react';
import { PropTypes } from 'prop-types';

import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadSinglePost, match } = this.props;
    loadSinglePost(match.params.id);
  }

  render() {
    const { singlePost } = this.props;
    const { pending, error, success} = this.props.request;

    return (
      <div>
        {(pending || !success) && <Spinner />}
        {!pending && success && singlePost && 
          <div>
            <PageTitle>{singlePost.title}</PageTitle> 
            <div className="post-author">
              <HtmlBox>{singlePost.author}</HtmlBox>
            </div>
            <div className="post-content">
              <HtmlBox>{singlePost.content}</HtmlBox>
            </div>
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