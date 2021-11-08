import { apis } from '../../shared/axios';
import produce from "immer"
import { createAction, handleActions } from "redux-actions"

const ADD_COMMENT = "comment/ADD_COMMENT"
// const GET_COMMNET = "GET_COMMENT"

const _addComment = createAction(ADD_COMMENT, (comments) => ({ comments }))
// const get_comment = createAction(GET_COMMNET, (comment_list) => ({
//   comment_list,
// }))

const initialState = {
  list: [],
}

export const addCommentDB = (comment) => {
  return function (dispatch, getState, { history }) {
    apis
      .addComment(comment)
      .then((res) => {
        console.log(res)
        // dispatch(_addComment(comment));
      })
      .catch((err) => console.log(err, "댓글작성에러"))
  }
}

// const get_comment_md = () => {
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
        draft.list.push(action.payload.comments)
      }),
    // [GET_COMMNET]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.comment_list = action.payload.comment_list
    //   }),
  },
  initialState
)

const actionsCreators = {
    _addComment,
    addCommentDB,
  // get_comment,
  // get_comment_md,
}

export { actionsCreators }