const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');

// get all posts
router.route('/posts').get(PostController.getPosts);

// get posts by range
router.route('/posts/range/:startAt/:limit').get(PostController.getPostsByRange);

// get single post
router.route('/posts/:id').get(PostController.getSinglePost);

// add posts
router.route('/posts').post(PostController.addPost);

// edit post
router.route('/posts/:id').post(PostController.editPost);

// remove post
router.route('/posts/:id').delete(PostController.deletePost);

module.exports = router;
