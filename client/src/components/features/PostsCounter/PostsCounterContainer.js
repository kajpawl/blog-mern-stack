import { connect } from 'react-redux';
import { getPostsCount } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  postsCount: getPostsCount(state),
})

export default connect(mapStateToProps)(PostsCounter);
