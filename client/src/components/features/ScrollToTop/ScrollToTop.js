import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
      });
    };
  }

  render() {
    return this.props.children;
  };
};

export default withRouter(ScrollToTop);



