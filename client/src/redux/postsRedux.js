import axios from 'axios';
import { API_URL } from '../config';

//action name creator
const reducerName = 'posts';
const createActionName = name => 'app/${reducerName}/${name}';

/*  INITIAL STATE  */

const initialState = [];

/*  SELECTORS  */

export const getPosts = ({ posts }) => posts;
export const getPostsCount = ({ posts }) => posts.length;

/*  ACTIONS  */

export const LOAD_POSTS = createActionName('LOAD_POSTS');

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });

/*  THUNKS  */

export const loadPostsRequest = () => {
  return async dispatch => {

    try {
      let res = await axios.get(`${API_URL}/posts`);
      dispatch(loadPosts(res.data));
    }
    catch(e) {
      console.log(e.message);
    }
  };
};

/*  REDUCER  */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {

    case LOAD_POSTS:
      return [ ...action.payload ];

    default:
      return statePart;
  }
};
