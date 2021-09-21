import { SHOWNAVBAR } from 'redux/navBar/navBarTypes';

const initialState = {
  showNavBar: true,
};

const navBarReducers = (state = initialState, action) => {
  switch (action.type) {
    case SHOWNAVBAR:
      return {
        ...state,
        showNavBar: false,
      };

    default:
      return state;
  }
};

export default navBarReducers;
