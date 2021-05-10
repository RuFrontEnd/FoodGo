import { combineReducers } from 'redux';
import loginReducer from 'redux/login/loginReducers';

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
