import { connect } from 'react-redux';
import { getPosts, getPages, getRequest, loadPostsByPageRequest, ratePostRequest } from '../../../redux/postsRedux';
import Posts from './Posts';

const mapStateToProps = state => ({
  posts: getPosts(state),
  request: getRequest(state),
  pages: getPages(state),
});

const mapDispatchToProps = dispatch => ({
  loadPostsByPage: (page, postsNumber) => dispatch(loadPostsByPageRequest(page, postsNumber)),
  ratePost: (value, id) => dispatch(ratePostRequest(value, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
