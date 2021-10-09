import { createStore, combineReducers } from "redux";

const ActionTypes = {
  INCREMENT_COUTER_VALUE: "INCREMENT_COUTER_VALUE",
  DECREMENT_COUTER_VALUE: "DECREMENT_COUTER_VALUE",
  SET_MEMBER_ID: "SET_MEMBER_ID",
};

// Actions Creator
const Actions = {
  incrementCounterValue: () => {
    return { type: ActionTypes.INCREMENT_COUTER_VALUE };
  },

  decrementCounterValue: () => {
    return { type: ActionTypes.DECREMENT_COUTER_VALUE };
  },
  setMemberId: (id) => {
    return {
      type: ActionTypes.SET_MEMBER_ID,
      id: id,
    };
  },
};

// Reducers
const counter_initialState = { value: 0 };
const member_initialState = { id: 5 };

function counterReducer(state = counter_initialState, action) {
  console.log("counter_action", action);
  switch (action.type) {
    case ActionTypes.INCREMENT_COUTER_VALUE:
      return { ...state, value: state.value + 1 };
    case ActionTypes.DECREMENT_COUTER_VALUE:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

function MemberReducer(state = member_initialState, action) {
  console.log("member_action", action);
  switch (action.type) {
    case ActionTypes.SET_MEMBER_ID:
      return { id: action.id };
    default:
      return state;
  }
}

let rootReducer = combineReducers({
  counter: counterReducer,
  member: MemberReducer,
});

// store
let store = createStore(rootReducer);

// store.dispatch({ type: ActionTypes.SET_MEMBER_ID, id: 5 });
// store.dispatch({ type: ActionTypes.SET_MEMBER_ID, id: 5 });

store.dispatch(Actions.incrementCounterValue());
store.dispatch(Actions.setMemberId(5));

console.log("member_id", store.getState().member.id);
console.log("counter_value", store.getState().counter.value);
