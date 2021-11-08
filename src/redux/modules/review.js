import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';

//action
const ADD_REVIEW = 'ADD_REVIEW';
const GET_REVIEW = 'GET_REVIEW';
const DEATAIL_REVIEW = 'DEATAIL_REVIEW';
//actionCreator
const addReview = createAction(ADD_REVIEW, (reviews) => ({ reviews }));
const getReview = createAction(GET_REVIEW, (review_list) => ({ review_list }));
const detailReview = createAction(DEATAIL_REVIEW, (reviewDetail) => ({
  reviewDetail,
}));

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

export const getReviewDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    apis
      .getReviewAX(reviewId)
      .then((res) => {
        const review_list = res.data.data;
        console.log(review_list);

        if (reviewId) {
          const review = review_list.filter((r) => r.reviewId === reviewId[0]);
          console.log(review);
          dispatch(getReview(review));
        } else {
          dispatch(getReview(review_list));
        }
      })
      .catch((err) => {
        window.alert('리뷰불러오기 실패!');
      });
  };
};

export const detailReviewDB = (reviewId) => {
  return function (dispatch, getState, { history }) {
    console.log('디테일 페이지', reviewId);
    apis
      .detailReviewAX(reviewId)
      .then((res) => {
        const reviewDetail = res.data.data;
        console.log(reviewDetail);

        dispatch(detailReview(reviewDetail));
      })
      .catch((err) => {
        window.alert('디테일 불러오기 실패');
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

    [GET_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.review_list;
      }),
    [DEATAIL_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.reviewDetail;
      }),
  },
  initialState,
);

const actionCreator = {
  addReviewDB,
  getReviewDB,
  detailReviewDB,
  getReview,
};
export { actionCreator };