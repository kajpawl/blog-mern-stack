import axios from 'axios';
import { API_URL } from '../config';

//action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/*  INITIAL STATE  */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singlePost: {},
  amount: 0,
  postsPerPage: 10,
  presentPage: 1,
};

/*  SELECTORS  */

export const getPosts = ({ posts }) => posts.data;
export const getPostsCount = ({ posts }) => posts.amount;
export const getSinglePost = ({ posts }) => posts.singlePost;
export const getRequest = ({ posts }) => posts.request;
export const getPages = ({ posts }) => Math.ceil(posts.amount / posts.postsPerPage);
export const getPresentPage = ({ posts }) => posts.presentPage;

/*  ACTIONS  */

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');
export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');
export const RATE_POST = createActionName('RATE_POST');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = post => ({ post, type: LOAD_SINGLE_POST });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });
export const ratePost = (value, id) => ( { value, id, type: RATE_POST });

/*  THUNKS  */
// commented-out lines are to simulate slow response

export const loadPostsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/posts`);
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadPosts(res.data));
      dispatch(endRequest());
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadSinglePostRequest = id => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/posts/${id}`);
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadRandomPostRequest = () => {
    return async dispatch => {

    dispatch(startRequest());
    try {
      let res = await axios.get(`${API_URL}/posts/random`);
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(loadSinglePost(res.data));
      dispatch(endRequest());
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadPostsByPageRequest = (page, postsNumber) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      if(page === undefined) page = 1;
      const postsPerPage = postsNumber || 10;

      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;

      let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000));

      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage,
        presentPage: page,
      };

      dispatch(loadPostsByPage(payload));
      dispatch(endRequest());
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addPostRequest = post => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      // let res = 
      await axios.post(`${API_URL}/posts`, post);
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(endRequest());
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const editPostRequest = (post, id) => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      await axios.put(`${API_URL}/posts/${id}`, post);
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(endRequest());
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const ratePostRequest = (value, id) => {
  return async dispatch => {

    try {
      await axios.put(`${API_URL}/posts/${value}/${id}`);
      dispatch(ratePost(value, id));
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const deletePostRequest = id => {
  return async dispatch => {

    dispatch(startRequest());
    try {
      await axios.delete(`${API_URL}/posts/${id}`);
      // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
      dispatch(endRequest());
    }
    catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

/*  REDUCER  */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {

    case LOAD_POSTS:
      return { ...statePart, data: action.payload };

    case LOAD_SINGLE_POST:
      return { ...statePart, singlePost: action.post };

    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: null } };

    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };

    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false }};

    case RESET_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: null }, singlePost: {} };

    case LOAD_POSTS_PAGE:
      return {
        ...statePart,
        postsPerPage: action.payload.postsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.posts],
      };

    case RATE_POST:
      const { data, singlePost } = statePart;
      const rating = action.value === 'downvote' ? -1 : 1;
      const updatedData = data.map(post => post.id === action.id ? { ...post, rate: post.rate + rating } : post);
      return { ...statePart, data: updatedData, singlePost: { ...singlePost, rate: singlePost.rate + rating } };

    default:
      return statePart;
  };
};
