import { LOGIN } from 'redux/member/memberTypes';
import { LOGOUT } from 'redux/member/memberTypes';

const initialState = {
  isLogin: false,
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
      };
    case LOGOUT:
      return {
        isLogin: false,
      };

    default:
      return state;
  }
};

export default loginReducers;
