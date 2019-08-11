import React from 'react';
// import { Link } from 'react-router-dom';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './NavBar.scss';

class NavBar extends React.Component {

  render() {
    const links = [
      { path: '/', title: 'Home' },
      { path: '/posts', title: 'Posts' },
      { path: '/posts/new', title: 'Add post' },
      { path: '/contact', title: 'Contact' }
    ];
    return (
      <div className="nav-bar">
        {/*// <Link to='/'>Home</Link>
        // <Link to='/posts'>Posts</Link>
        // <Link to='/posts/new'>Add post</Link>
        // <Link to='/contact'>Contact</Link>*/}
        <Logo />
        <MainMenu links={links} />
      </div>
    );
  }
}

export default NavBar;