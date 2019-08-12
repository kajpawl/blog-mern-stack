import React from 'react';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const SinglePostPage = props => (
  <div>
    <SinglePost match={props.match.params.id} />
  </div>
);

export default SinglePostPage;