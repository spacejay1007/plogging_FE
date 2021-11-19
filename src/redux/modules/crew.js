import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../../shared/axios';
import { imageCreators } from './image';
import Swal from 'sweetalert2';
import { createDispatchHook } from 'react-redux';

// 모임관리
const GET_CREW = 'GET_CREW';

// 마에페이지 출석체크
const GET_CREWCHECK = 'GET_CREWCHECK';
//마이페이지 출석체크확인
const PUT_CREW = 'PUT_CREW';

//모임관리
const getCrew = createAction(GET_CREW, (crew_list) => ({ crew_list }));

//마이페이지 출석체크
const getCrewCheck = createAction(GET_CREWCHECK, (crew_check) => ({
  crew_check,
}));

const putCrew = createAction(PUT_CREW, (editCheck) => ({
  editCheck,
}));

// initialState

const initialState = {
  list: [],
  detail: [],
  post: null,
  posts: [],
};

export const crewDB = () => {
  return function (dispatch, { history }) {
    apis
      .getCrewAx()
      .then((res) => {
        console.log(res);
        const crew_list = res.data.data;
        dispatch(getCrew(crew_list));
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const crewCheckDB = (postId) => {
  return function (dispatch, { history }) {
    apis
      .getCrewCheckAx(postId)
      .then((res) => {
        console.log(res);
        const crew_check = res.data.data;
        dispatch(getCrewCheck(crew_check));
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

export const editCrewCheckDB = (postId, checkedInputs) => {
  return function (dispatch, { history }) {
    apis
      .putCrewCheckAx(postId, checkedInputs)
      .then((res) => {
        console.log(res);
        // window.alert('출석완료');
        Swal.fire({
          text: '저장하면 출석 관리가 마감되어 더 이상 수정할 수 없습니다. 이대로 저장할까요?',
          width: '360px',
          height: '112px',
          confirmButtonColor: '#23C8AF',

          // showDenyButton: true,
          showCancelButton: true,
          confirmButtonColor: '#23c8af',
          cancelButtonColor: '#d33',
          confirmButtonText: '저장',
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('저장완료!');
            dispatch(putCrew(postId, checkedInputs));
          }
        });
      })
      .catch((err) => {
        console.log('err');
      });
  };
};

// reducer
export default handleActions(
  {
    [GET_CREW]: (state, action) =>
      produce(state, (draft) => {
        draft.crew = action.payload.crew_list;
      }),
    [GET_CREWCHECK]: (state, action) =>
      produce(state, (draft) => {
        draft.check = action.payload.crew_check;
      }),
    [PUT_CREW]: (state, action) =>
      produce(state, (draft) => {
        draft.checks = action.payload.editCheck;
      }),
  },
  initialState,
);

const crewActions = {
  crewCheckDB,
  editCrewCheckDB,
  crewDB,
};
export { crewActions };
