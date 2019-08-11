import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostForm from '../../features/PostForm/PostFormContainer';

const EditPostPage = props => (
  <div>
    <PageTitle>Edit post</PageTitle>
    <PostForm match={props.match} />
  </div>
);

export default EditPostPage;
