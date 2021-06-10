import {
  LOGIN,
  LOGOUT,
  SETCURRENTUSER,
  SETCURRENTUSERDATA,
} from 'redux/member/memberTypes';

const initialState = {
  isLogin: null,
  currentUser: -1,
  currentUserData: [],
};

const memberReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    case SETCURRENTUSER:
      return {
        ...state,
        currentUser: action.currentUser,
      };

    case SETCURRENTUSERDATA:
      return {
        ...state,
        currentUser: state,
      };

    default:
      return state;
  }
};

export default memberReducers;
