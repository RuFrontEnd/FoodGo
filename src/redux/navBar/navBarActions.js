import { SHOWNAVBAR } from 'redux/navBar/navBarTypes';

export const showNavBar = () => {
  return {
    type: SHOWNAVBAR,
    info: 'showNavBar',
  };
};
