import React from 'react';
import { PropTypes } from 'prop-types';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';

import TextField from '../../common/TextField/TextField';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Button from '../../common/Button/Button';
import Alert from '../../common/Alert/Alert';
import Spinner from '../../common/Spinner/Spinner';
import './PostForm.scss';

class PostForm extends React.Component {

  state = {
    post: {
      title: '',
      author: '',
      content: ''
    }
  }

  async componentDidMount() {
    const { resetRequest, loadSinglePost, match } = this.props;
    resetRequest();
    if(match.params.id) await loadSinglePost(match.params.id);
    const { singlePost } = this.props;
    if(match.params.id) this.setState({ post: singlePost });
  }

  handleChange = e => {
    const { post } = this.state;
    this.setState({ post: { ...post, [e.target.name]: e.target.value } });
  }

  handleEditor = text => {
    const { post } = this.state;
    this.setState({ post: { ...post, content: text  }});
  }

  handlePostSubmit = e => {
    const { addPost, editPost, match, resetRequest } = this.props;
    const { post } = this.state;

    e.preventDefault();
    if (match.params.id) {
      resetRequest();
      editPost(post, match.params.id);
    }
    else addPost(post);
  }

  handlePostDelete = id => {
    const { resetRequest, deletePost } = this.props;
    resetRequest();
    deletePost(id);
  }

  render() {
    const { post } = this.state;
    const { handleChange, handleEditor, handlePostSubmit, handlePostDelete } = this;
    const { request, match, singlePost } = this.props;

    if(request.error) return <Alert variant="error">{request.error}</Alert>
    else if(!singlePost.title && request.success) return <Alert variant="success">{!match.params.id ? 'Post has been added!' : 'Post has been updated!'}</Alert>
    else if(request.pending) return <Spinner />
    else return (
      <form onSubmit={handlePostSubmit}>
        <TextField
          label="Title"
          value={post.title}
          onChange={handleChange}
          name="title"
        />
        <TextField
          label="Author"
          value={post.author}
          onChange={handleChange}
          name="author"
        />
        <SectionTitle>Edit post content</SectionTitle>
        <Editor
          className="content-editor"
          text={post.content}
          onChange={handleEditor}
          options={{ placeholder: false, toolbar: { buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3'] } }}
        />
        <Button variant="primary">{!match.params.id ? 'Add post' : 'Update post'}</Button>
        {match.params.id && <button type="button" onClick={(id) => handlePostDelete(match.params.id)} className="button button--danger">Delete post</button>}
      </form>
    );
  }
};

PostForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired,
  singlePost: PropTypes.object,
  match: PropTypes.object.isRequired,
};

export default PostForm;
