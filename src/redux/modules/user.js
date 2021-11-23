import { createAction, handleActions } from 'redux-actions';
// import { Cookies } from 'react-cookie';
import { produce } from 'immer';
import { apis } from '../../shared/axios';
import { deleteCookie, setCookie } from '../../shared/Cookie';
import Swal from 'sweetalert2';

// Actions
const GET_USER = 'GET_USER';
// 로그인, 로그아웃
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
// 이메일, 닉네임 중복확인
const NICKNAME_CHECK = 'NICKNAME_CHECK';
const EMAIL_CHECK = 'EMAIL_CHECK';
// 회원정보 수정, 불러오기
const PROFILE_EDIT = 'PROFILE_EDIT';
const GET_PROFILE = 'GET_PROFILE';

//마이페이지 내 북마크
const GET_MYBOOKMARK = `GET_MYBOOKMARK`;

const initialState = {
  user: null,
  is_login: false,
};

// Action Creators
const getUser = createAction(GET_USER, (user) => ({ user }));
const logIn = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));
const nicknameCheck = createAction(NICKNAME_CHECK, (user) => ({ user }));
const emailCheck = createAction(EMAIL_CHECK, (user) => ({ user }));
const profileEdit = createAction(PROFILE_EDIT, (user) => ({ user }));
const getProfile = createAction(GET_PROFILE, (user) => ({ user }));
const getMybookMark = createAction(GET_MYBOOKMARK, (bookMark) => ({
  bookMark,
}));
// thunk function
const loginMiddleware = (email, password) => {
  return (dispatch, getState, { history }) => {
    apis
      .login(email, password)
      .then((res) => {
        setCookie('token', res.data.data.jwtToken);
        localStorage.setItem('role', res.data.data.user.role);
        localStorage.setItem('id', res.data.data.user.id);
        localStorage.setItem('email', res.data.data.user.email);
        localStorage.setItem('nickname', res.data.data.user.nickname);
        localStorage.setItem('intro', res.data.data.user.intro);
        localStorage.setItem('location', res.data.data.user.location);
        localStorage.setItem('type', res.data.data.user.type);
        localStorage.setItem('distance', res.data.data.user.distance);
        localStorage.setItem('userImg', res.data.data.user.userImg);
        dispatch(
          logIn({
            role: res.data.data.user.role,
            email: res.data.data.user.email,
            nickname: res.data.data.user.nickname,
            intro: res.data.data.user.intro,
            location: res.data.data.user.location,
            type: res.data.data.user.type,
            distance: res.data.data.user.distance,
            userImg: res.data.data.user.userImg,
          }),
        );
        window.location.replace('/');
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          text: '로그인에 실패하였습니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
        window.location.replace('/login');
      });
  };
};

const signupMiddleware = (
  email,
  password,
  nickname,
  location,
  distance,
  type,
  number,
) => {
  return (dispatch, getState, { history }) => {
    apis
      .signup(email, password, nickname, location, distance, type, number)
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: '회원가입이 완료되었습니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
        history.replace('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

const emailCheckMiddleware = (email) => {
  return (dispatch) => {
    apis
      .emailCheck(email)
      .then((res) => {
        console.log(res);
        dispatch(emailCheck(email));
        Swal.fire({
          text: '사용가능한 이메일입니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '중복된 이메일입니다.',
          width: '360px',
          confirmButtonColor: '#E3344E',
        });
      });
  };
};

const nicknameCheckMiddleware = (nickname) => {
  return (dispatch) => {
    apis
      .nicknameCheck(nickname)
      .then((res) => {
        console.log(res);
        dispatch(nicknameCheck(nickname));
        Swal.fire({
          text: '사용가능한 닉네임입니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '중복된 닉네임입니다.',
          width: '360px',
          confirmButtonColor: '#E3344E',
        });
      });
  };
};

const logOutMiddleware = () => {
  return (dispatch, getState, { history }) => {
    deleteCookie('token');
    localStorage.removeItem('role');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('location');
    localStorage.removeItem('type');
    localStorage.removeItem('distance');
    localStorage.removeItem('userImg');
    localStorage.removeItem('nickname');
    localStorage.removeItem('intro');
    dispatch(logOut());
    window.location.replace('/');
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

const profileEditMiddleware = (
  password,
  nickname,
  location,
  distance,
  type,
  intro,
  image,
) => {
  return (dispatch, getState, { history }) => {
    apis
      .profileEdit(password, nickname, location, distance, type, intro, image)
      .then((res) => {
        console.log(res);
        Swal.fire({
          text: '회원정보 수정이 완료되었습니다.',
          width: '360px',
          confirmButtonColor: '#23c8af',
        });
        history.replace('/my');
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          text: '다시 입력해주세요.',
          width: '360px',
          confirmButtonColor: '#E3344E',
        });
      });
  };
};

const getProfileMiddleware = (user) => {
  return (dispatch, getState, { history }) => {
    apis
      .getProfileAX(user)
      .then((res) => {
        const my_profile = res.data;
        console.log(my_profile);
        dispatch(getProfile(my_profile));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getBookMarkDB = () => {
  return (dispatch, { history }) => {
    apis
      .getBookMarkAX()
      .then((res) => {
        console.log(res);
        const bookMark = res.data;
        dispatch(getMybookMark(bookMark));
      })
      .catch((err) => {
        console.log(err);
      });
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
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [NICKNAME_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [EMAIL_CHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
      }),
    [GET_PROFILE]: (state, action) =>
      produce(state, (draft) => {
        draft.newProfile = action.payload.user;
      }),
    [GET_MYBOOKMARK]: (state, action) =>
      produce(state, (draft) => {
        draft.myBookmark = action.payload.bookMark;
      }),
  },
  initialState,
);

const userCreators = {
  signupMiddleware,
  loginMiddleware,
  emailCheckMiddleware,
  nicknameCheckMiddleware,
  loginCheckMiddleware,
  logOutMiddleware,
  logIn,
  getUser,
  profileEditMiddleware,
  profileEdit,
  getProfileMiddleware,
  getProfile,
  getBookMarkDB,
};

export { userCreators };
