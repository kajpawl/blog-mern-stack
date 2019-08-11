import { connect } from 'react-redux';
import { getRequest, addPostRequest, getSinglePost, loadSinglePostRequest, editPostRequest, resetRequest } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  request: getRequest(state),
  singlePost: getSinglePost(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post)),
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
  editPost: (post, id) => dispatch(editPostRequest(post, id)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
