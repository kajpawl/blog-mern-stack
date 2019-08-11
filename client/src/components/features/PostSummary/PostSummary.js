import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from '../../../utils/cutText';
import './PostSummary.scss';

const PostSummary = ({ id, title, content, author }) => (
  <article className="post-summary">
    <Link to={`posts/${id}`}>
      <SmallTitle>{title}</SmallTitle>
    </Link>
    <p className="post-author">Author: {author}</p>
    <HtmlBox className="post-content">{cutText(content, 250)}</HtmlBox>
    <Link to={`posts/${id}`}>
      <Button variant="primary">
        Read more
      </Button>
    </Link>
    <Link to={`posts/edit/${id}`}>
      <Button variant="primary">
        Update post
      </Button>
    </Link>
  </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default PostSummary;