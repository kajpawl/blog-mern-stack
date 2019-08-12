import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from '../../features/Posts/PostsContainer';

const HomePage = () => (
  <div>
    <div>
      <PageTitle>Blog</PageTitle>
      <Posts postsPerPage={3} pagination={false} />
    </div>
  </div>
);

export default HomePage;