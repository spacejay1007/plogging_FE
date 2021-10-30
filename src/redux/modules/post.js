import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';
import { imageCreators } from './image';

// actions
const ADD_POST = 'post/ADD_POST';
const GET_POST = 'post/GET_POST';
// action creators
const addPost = createAction(ADD_POST, (posts) => ({ posts }));
const getPost = createAction(GET_POST, (posts) => ({ posts }));

// initialState
const initialState = {
  list: [],
  post: null,
};

// Thunk functions
export const addPostDB = (content) => {
  return function (dispatch, getState, { history }) {
    apis
      .addPost(content)
      .then(() => {
        dispatch(addPost(content));
        history.push('/');
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        window.alert('에러!');
      });
  };
};

export const getPostDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getPost()
      .then((res) => {
        const post_list = res.data;
        console.log(post_list);
      })
      .catch((err) => {
        window.alert('게시물 불러오기 실패!');
      });
  };
};

// reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.posts);
      }),
  },
  {
    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.posts);
      }),
  },
  initialState,
);

const postActions = {
  addPostDB,
  getPostDB,
};

export { postActions };
