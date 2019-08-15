import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest, loadRandomPostRequest, ratePostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
  singlePost: getSinglePost(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
  loadRandomPost: () => dispatch(loadRandomPostRequest()),
  ratePost: (value, id) => dispatch(ratePostRequest(value, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);
