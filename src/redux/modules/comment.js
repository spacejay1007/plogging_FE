import { apis } from '../../shared/axios';
import produce from 'immer';
import { createAction, handleActions } from 'redux-actions';

const ADD_COMMENT = 'comment/ADD_COMMENT';
const ADD_REPLY = 'comment/ADD_REPLY';
const GET_COMMENT = 'comment/GET_COMMENT';

const _addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const _addReply = createAction(ADD_REPLY, (reply) => ({ reply }));
const _getComment = createAction(GET_COMMENT, (comments) => ({ comments }));

const initialState = {
  list: [],
  comment_list: []
};

export const addCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(comment)
      .then((res) => {
        console.log(res);
        dispatch(_addComment(comment));
      })
      .catch((err) => console.log(err, '댓글작성에러'));
  };
};

export const addReplyDB = (comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(comment)
      .then((res) => {
        console.log(res);
        dispatch(_addReply(comment));
      })
      .catch((err) => console.log(err, '댓글작성에러'));
  };
};

export const getCommentDB = (postId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getComment(postId)
      .then((res) => {
        const comments = res.data;
        console.log(comments);
        dispatch(_getComment(comments));
      })
      .catch((err) => console.log(err, '댓글불러오기에러'));
  };
};

// const addCommentDB = () => {
//   return function (dispatch, getState, { history }) {
//     const _post_id = getState().post.post_list

//     console.log(_post_id)

//     apiRef
//       .post(`/reply/replyList`)
//       .then((res) => {
//         dispatch(get_comment(res.data))
//       })
//       .catch((err) => console.log(err, "댓글 불러오기 에러"))
//   }
// }

export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comment);
      }),
    [ADD_REPLY]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.reply);
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.comment_list = action.payload.comments;
        console.log(action.payload);
      }),
  },
  initialState,
);

const actionsCreators = {
  _addComment,
  addCommentDB,
  _addReply,
  addReplyDB,
  _getComment,
  getCommentDB,
};

export { actionsCreators };
