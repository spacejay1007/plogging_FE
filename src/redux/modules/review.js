import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';

//action
const ADD_REVIEW = 'ADD_REVIEW';

//actionCreator
const addReview = createAction(ADD_REVIEW, (reviews) => reviews);

const initialState = {
  list: [],
};

//Thunk functions
export const addReviewDB = (content) => {
  return function (dispatch, getState, { history }) {
    apis
      .addReviewAX(content)
      .then(() => {
        dispatch(addReview(content));
      })
      .catch((err) => {
        window.alert('리뷰다시');
      });
  };
};

//reducer
export default handleActions(
  {
    [ADD_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.review);
      }),
  },
  initialState,
);

const actionCreator = {
  addReviewDB,
};
export { actionCreator };
