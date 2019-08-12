import React from 'react';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const RandomPostPage = props => (
  <div>
    <SinglePost location={props.location} match={'random'} />
  </div>
);

export default RandomPostPage;