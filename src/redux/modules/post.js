import { createAction, handleActions } from "redux-actions";
import produce from 'immer';
import { apis } from "../../shared/axios";
import { imageCreators } from "./image";

// actions
const ADD_POST = 'post/ADD_POST';

// action creators
const addPost = createAction(ADD_POST, (posts) => ({posts}));

// initialState
const initialState = {
    list: [],
    post: null,
};

// Thunk functions
export const addPostDB = (content) => {
    return function (dispatch, getState, {history}) {
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

// reducer
export default handleActions(
    {
        [ADD_POST]: (state, action) => 
        produce(state, (draft) => {
            draft.list.push(action.payload.posts);
        }),
    },
    initialState,
);

const postActions = {
    addPostDB,
};

export { postActions };
