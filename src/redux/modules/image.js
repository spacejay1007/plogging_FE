import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const PREVIEW = 'image/PREVIEW';
const UPLOAD = 'image/UPLOAD';

const setPreview = createAction(PREVIEW, (preview) => ({ preview }));
const imageUpload = createAction(UPLOAD, (postImg) => ({ postImg }));

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
	},
	initialState,
);

const imageCreators = {
	setPreview,
	imageUpload,
};

export { imageCreators };