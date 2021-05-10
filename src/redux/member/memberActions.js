import { LOGIN } from 'redux/member/memberTypes';
import { LOGOUT } from 'redux/member/memberTypes';

export const login = () => {
  return {
    type: LOGIN,
    info: 'login status has been changed(true)',
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    info: 'login status has been changed(false)',
  };
};
