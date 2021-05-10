import { LOGIN } from 'redux/login/loginTypes';

export const login = () => {
  return {
    type: LOGIN,
    info: 'login status has been changed',
  };
};
