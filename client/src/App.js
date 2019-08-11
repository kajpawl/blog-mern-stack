import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';

// import routes
import Home from './components/pages/Home/HomePage';
import Posts from './components/pages/Posts/PostsPage';
import Contact from './components/pages/Contact/ContactPage';
import AddPost from './components/pages/AddPost/AddPostPage';
import SinglePost from './components/pages/SinglePost/SinglePostPage';
import EditPost from './components/pages/EditPost/EditPostPage';
import NotFound from './components/pages/NotFound/NotFoundPage';

// reset state.request on changing page
import ScrollToTop from './components/features/ScrollToTop/ScrollToTop';

class App extends React.Component {

  render() {
    return (
      <ScrollToTop>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/new" exact component={AddPost} />
            <Route path="/posts/edit/:id" exact component={EditPost} />
            <Route path="/posts/:id" exact component={SinglePost} />
            <Route path="/contact" exact component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </ScrollToTop>
    );
  }
};

export default App;
