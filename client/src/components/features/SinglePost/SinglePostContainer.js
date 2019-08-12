import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest, loadRandomPostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  singlePost: getSinglePost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
  loadRandomPost: () => dispatch(loadRandomPostRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
