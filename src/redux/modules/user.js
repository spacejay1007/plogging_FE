import { createAction, handleActions } from 'redux-actions';
// import { Cookies } from 'react-cookie';
import { produce } from 'immer';
import { apis } from '../../shared/axios';
import { deleteCookie, setCookie } from '../../shared/Cookie';

// Actions
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const initialState = {
  user: null,
  is_login: false,
};

// Action Creators
const logIn = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));

// thunk function
const loginMiddleware = (email, password) => {
  return (dispatch, getState, { history }) => {
    apis
      .login(email, password)
      .then((res) => {
        setCookie('token', res.data.data.jwtToken);
        localStorage.setItem('role', res.data.data.user.role);
        dispatch(
          logIn({
            role : res.data.data.user.role
          })
        );
        history.replace('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const signupMiddleware = (email, password, nickname) => {
  return (dispatch, getState, { history }) => {
    const user = {
      email: email,
      nickname: nickname,
      password: password,
    };
    apis
      .signup(user)
      .then((res) => {
        history.replace('/login');
        window.alert('회원가입이 완료되었습니다!');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const emailCheckMiddleware = (email) => {
  return () => {
    apis
      .emailCheck(email)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const nicknameCheckMiddleware = (nickname) => {
  return () => {
    apis
      .nicknameCheck(nickname)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const logOutMiddleware = () => {
  return (dispatch, getState, { history }) => {
    deleteCookie('token');
    localStorage.removeItem('role');
    dispatch(logOut());
    history.push('/login');
  };
};

const loginCheckMiddleware = () => {
  return (dispatch, getState, { history }) => {
    const role = localStorage.getItem('role');
    const tokenCheck = document.Cookie;
    if (tokenCheck) {
      dispatch(logIn({ role: role }));
    } else {
      dispatch(logOutMiddleware());
    }
  };
};

export default handleActions(
  {
    [LOGIN]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const userCreators = {
  signupMiddleware,
  loginMiddleware,
  emailCheckMiddleware,
  nicknameCheckMiddleware,
  loginCheckMiddleware,
  logOutMiddleware,
  logIn
};

export { userCreators };
