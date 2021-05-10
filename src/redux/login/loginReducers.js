import { LOGIN } from 'redux/login/loginTypes';

const initialState = {
  isLogin: false,
};

const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        isLogin: true,
      };

    default:
      return state;
  }
};

export default loginReducers;
