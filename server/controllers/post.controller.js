const uuid = require('uuid');
const Post = require('../models/post.model');

// get all posts

exports.getPosts = async (req, res) => {
  try {
    res.status(200).json(await Post.find());
  } catch (err) {
    res.status(500).json(err);
  }
};

// get posts by range

exports.getPostsByRange = async (req, res) => {
  try {
    let { startAt, limit } = req.params;

    startAt = parseInt(startAt);
    limit = parseInt(limit);

    const posts = await Post.find().sort({date: -1}).skip(startAt).limit(limit);
    const amount = await Post.countDocuments();

    res.status(200).json({
      posts,
      amount,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// get single post

exports.getSinglePost = async (req, res) => {
  try {
    res.status(200).json(await Post.findOne({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};

// get random post

exports.getRandomPost = async (req, res) => {
  try {
    const amount = await Post.countDocuments();
    const random = Math.floor(Math.random() * amount);

    res.status(200).json(await Post.findOne().skip(random));
  } catch (err) {
    res.status(500).json(err);
  }
};

// add new post

exports.addPost = async (req, res) => {
  try {
    const { title, author, content } = req.body;

    let newPost = new Post();
    newPost.title = title;
    newPost.author = author;
    newPost.content = content;
    newPost.date = Date.now();
    newPost.id = uuid();
    newPost.rate = 0;

    // let newPost = new Post(req.body);
    // newPost.id = uuid();

    postSaved = await newPost.save();
    res.status(200).json(postSaved);

  } catch(err) {
    res.status(500).json(err);
  }
};

// edit post

exports.editPost = async (req, res) => {
  try {
    res.status(200).json(await Post.update({ id: req.params.id }, req.body));
  } catch (err) {
    res.status(500).json(err);
  }
};

// rate post

exports.ratePost = async (req, res) => {
  try {
    const value = req.params.rate === 'downvote' ? -1 : 1;

    res.status(200).json(
      await Post.update({ id: req.params.id }, { $inc: { rate: value } })
    );
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete post

exports.deletePost = async (req, res) => {
  try {
    res.status(200).json(await Post.findOneAndRemove({ id: req.params.id }));
  } catch (err) {
    res.status(500).json(err);
  }
};
