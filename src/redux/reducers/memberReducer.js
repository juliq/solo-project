import { MEMBER_ACTIONS } from '../actions/memberActions';
import { combineReducers } from 'redux';

const member = (state = [], action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
      case MEMBER_ACTIONS.GET_MEMBERS:
        return action.payload;
      default:
        return state;
    }
  }
  
  
  // user will be on the redux state at:
  // state.user
  export default combineReducers({
    member,
  });
  