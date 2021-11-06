import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const PREVIEW = 'image/PREVIEW';
const UPLOAD = 'image/UPLOAD';
const REVIEW_UP = 'image/REVIEW_UP';

const setPreview = createAction(PREVIEW, (preview) => ({ preview }));
const imageUpload = createAction(UPLOAD, (postImg) => ({ postImg }));
const reviewImageUp = createAction(REVIEW_UP, (reviewImg) => ({ reviewImg }));

const initialState = {
  postImg: null,
  preview: null,
};

export default handleActions(
  {
    [UPLOAD]: (state, action) =>
      produce(state, (draft) => {
        draft.postImg = action.payload.postImg;
      }),
    [PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    [REVIEW_UP]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.reviewImg;
      }),
  },
  initialState,
);

const imageCreators = {
  setPreview,
  imageUpload,
  reviewImageUp,
};

export { imageCreators };
