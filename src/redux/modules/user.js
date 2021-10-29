import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/axios';

const SET_USER = 'SET_USER';

const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  email: '',
  nickname: '',
  password: '',
  location: '',
  type: '',
  distance: '',
  is_login: false,
};

const loginMiddleware = (loginInfo) => {
  return (distance, getState, { history }) => {
    apis
      .login(loginInfo)
      .then((res) => {
        //ineterceptor
      })
      .catch((err) => {
        //ineterceptor
      });
  };
};

const signupMiddleware = (signupInfo) => {
  return () => {
    apis
      .signup(signupInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const emailCheckMiddleware = (email) => {
  return () => {
    apis
      .emailCheck(email)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

const nicknameCheckMiddleware = (nickname) => {
  return () => {
    apis
      .nicknameCheck(nickname)
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState,
);

const userCreators = {
  signupMiddleware,
  loginMiddleware,
  setUser,
  emailCheckMiddleware,
  nicknameCheckMiddleware,
};

export { userCreators };
