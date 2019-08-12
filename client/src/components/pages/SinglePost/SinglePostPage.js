import React from 'react';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const SinglePostPage = props => (
  <div>
    <SinglePost location={props.location} match={props.match.params.id} />
  </div>
);

export default SinglePostPage;