import { combineReducers } from 'redux';
import memberReducer from 'redux/member/memberReducers';

const rootReducer = combineReducers({
  member: memberReducer,
});

export default rootReducer;
