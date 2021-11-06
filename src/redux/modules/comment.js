// import { createAction, handleActions } from 'redux-actions';
// import produce from 'immer';
// import { apis } from '../../shared/axios';

// const COMMENTADD = 'comment/ADD';
// const COMMENTLOAD = 'comment/LOAD';
// const COMMENTDELETE = 'comment/DELETE';

// const _addComment = createAction(COMMENTADD, (index, newComment) => ({index, newComment}));
// const _loadComment = createAction(COMMENTLOAD, (comments) => ({comments}));
// const _deleteComment = createAction(COMMENTDELETE, (index, commentId) => ({index, commentId}));

// export const addCommentDB = (postId, comment, index) => {
//     return function(dispatch, getState, {history}) {
//       apis
//         .addComment(postId, comment)
//         .then((res) => {
//           const newComment = res.data
//           dispatch(_addComment(index, newComment))
//           dispatch(getPostDetailDB(postId))
//         }).catch((err) => {
//           console.log(err)
//         })
//     }
//   }

//   export const loadCommentDB = (postId) => {
//     return function(dispatch, getState, {history}) {
//       apis
//         .loadComment(postId, comment)
//         .then((res) => {
//           const newComment = res.data
//           dispatch(_addComment(index, newComment))
//           dispatch(getPostDetailDB(postId))
//         }).catch((err) => {
//           console.log(err)
//         })
//     }
//   }
  
//   export const deleteCommentDB = (postId, commentId, index) => {
//     return function(dispatch, getState, {history}) {
//       apis
//         .delComment(postId, commentId)
//         .then((res) => {
//           dispatch(_deleteComment(index, commentId))
//           dispatch(getPostDetailDB(postId))
//         }).catch((err) => {
//           console.log(err)
//         })
//     }
//   }
  
// // reducer
// export default handleActions(
//     {
//       [ADD_POST]: (state, action) =>
//         produce(state, (draft) => {
//           draft.list.push(action.payload.posts);
//         }),
//     },
//     initialState,
//   );
  
//   const commentActions = {
//     addCommentDB,
//     loadCommentDB,
//     deleteCommentDB
//   };
  
//   export { commentActions };
    