import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';
import { imageCreators } from './image';
import { createDispatchHook } from 'react-redux';

// actions
// 모임 만들기
const ADD_POST = 'post/ADD_POST';
// 모임 상세보기
const GET_POST_DETAIL = 'post/LOAD';
// 메인 모임 리스트
const GET_POST = 'post/GET_POST';

const SET_BOOKMARK = 'post/SET_BOOKMARK';

// action creators
// 모임 만들기
const _addPost = createAction(ADD_POST, (posts) => ({ posts }));
// 모임 상세 보기
const _getPostDetail = createAction(GET_POST_DETAIL, (post) => ({ post }));
// 메인 모임 리스트
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));

const setBookMark = createAction(SET_BOOKMARK, (bookmark) => ({
  bookmark,
}));
// initialState
const initialState = {
  list: [],
  detail: [],
  post: null,
};

// Thunk functions
export const addPostDB = (content) => {
  return function (dispatch, getState, { history }) {
    apis
      .addPost(content)
      .then(() => {
        dispatch(_addPost(content));
        history.push('/');
        dispatch(imageCreators.setPreview(null));
      })
      .catch((err) => {
        window.alert('에러!');
      });
  };
};

export const getPostDetailDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getPostDetail(postId)
      .then((res) => {
        dispatch(_getPostDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getPost()
      .then((res) => {
        const post_list = res.data;
        console.log(post_list);
        dispatch(getPost(post_list));
      })
      .catch((err) => {
        window.alert('게시물 불러오기 실패!');
      });
  };
};

export const setBookMarkDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .setBookMarkAX(postId)
      .then((res) => {
        console.log(res.data.data.bookMarkOnOff);
        const bookmark = res.data.data;

        // if (res.status !== 200) {
        //   return;
        // }
        dispatch(setBookMark(bookmark));
      })
      .catch((err) => {
        console.log('err');
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

    [GET_POST_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.detail = action.payload.post;
      }),

    [GET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
        console.log(action.payload);
      }),
    [SET_BOOKMARK]: (state, action) =>
      produce(state, (draft) => {
        draft.bookmark = action.payload.bookmark;
      }),
  },
  initialState,
);

const postActions = {
  addPostDB,
  getPostDB,
  getPostDetailDB,
  setBookMarkDB,
};

export { postActions };
