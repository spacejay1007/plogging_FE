import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';
import { imageCreators } from './image';
import Swal from 'sweetalert2';
import { createDispatchHook } from 'react-redux';

// actions
// 모임 만들기
const ADD_POST = 'post/ADD_POST';
// 모임 상세보기
const GET_POST_DETAIL = 'post/LOAD';
// 메인 모임 리스트
const GET_POST = 'post/GET_POST';
// 북마크
const SET_BOOKMARK = 'SET_BOOKMARK';
// 마이페이지 신청내역
const GET_MYAPPLY = 'GET_MYAPPLY';
// 마에페이지 출석체크
const GET_MEMBER = 'GET_MEMBER';
//마이페이지 출석체크확인
const PUT_MEMBER = 'PUT_MEMBER';

// action creators
// 모임 만들기
const addPost = createAction(ADD_POST, (posts) => ({ posts }));
// 모임 상세 보기
const _getPostDetail = createAction(GET_POST_DETAIL, (post) => ({ post }));
// 메인 모임 리스트
const getPost = createAction(GET_POST, (post_list) => ({ post_list }));

const setBookMark = createAction(SET_BOOKMARK, (bookmark) => ({
  bookmark,
}));
// 신청 내역 불러오기
const getMyApply = createAction(GET_MYAPPLY, (apply_list) => ({ apply_list }));
//마이페이지 출석체크
const getMember = createAction(GET_MEMBER, (member_check) => ({
  member_check,
}));

const putMember = createAction(PUT_MEMBER, (check_member) => ({
  check_member,
}));

// initialState
const initialState = {
  list: [],
  detail: [],
  post: null,
  posts: [],
};

// Thunk functions
export const addPostDB = (contents) => {
  return function (dispatch, getState, { history }) {
    apis
      .addPost(contents)
      .then(() => {
        dispatch(addPost(contents));
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

        dispatch(setBookMark(bookmark));
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const getMyApplyDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getMyApplyAX(postId)
      .then((res) => {
        const my_apply = res.data;
        console.log(my_apply);
        dispatch(getMyApply(my_apply));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setJoinCheckDB = (postId) => {
  return function ({ history }) {
    apis
      .setJoinCheckAX(postId)
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: '모임 참여 신청이 완료되었습니다!',
          width: '360px',
          confirmButtonColor: '#23C8AF',
        });
        window.location.push(`/post/${postId}`);
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const deleteJoinCheckDB = (postId) => {
  return function ({ history }) {
    apis
      .deleteJoinCheckAX(postId)
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: '모임 참여 취소가 완료되었습니다!',
          width: '360px',
          confirmButtonColor: '#FF0000',
        });
        window.location.push(`/post/${postId}`);
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const memberCheckDB = (postId) => {
  return function (dispatch, { history }) {
    apis
      .getMemberCheckAx(postId)
      .then((res) => {
        console.log(res);
        const member_check = res.data.data;
        dispatch(getMember(member_check));
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const editMemberCheckDB = (postId, checkedItems) => {
  return function (dispatch, { history }) {
    apis
      .putMemberCheckAx(postId, checkedItems)
      .then((res) => {
        console.log(res);
        window.alert('출석완료');
        dispatch(putMember(postId, checkedItems));
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
        draft.posts.push(action.payload.posts);
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
        draft.bookMark = action.payload.bookmark;
      }),

    [GET_MYAPPLY]: (state, action) =>
      produce(state, (draft) => {
        draft.lists = action.payload.apply_list;
      }),
    [GET_MEMBER]: (state, action) =>
      produce(state, (draft) => {
        draft.check = action.payload.member_check;
      }),
    [PUT_MEMBER]: (state, action) =>
      produce(state, (draft) => {
        draft.checks = action.payload.editCheck;
      }),
  },
  initialState,
);

const postActions = {
  addPostDB,
  getPostDB,
  getPostDetailDB,
  setBookMarkDB,
  getMyApplyDB,
  setJoinCheckDB,
  deleteJoinCheckDB,
  memberCheckDB,
  editMemberCheckDB,
};

export { postActions };
