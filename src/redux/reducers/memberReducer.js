import { combineReducers } from 'redux';

const members = (state = [], action) => {
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
      case 'SET_MEMBERS':
        return action.payload;
      default:
        return state;
    }
  }
  
  
  // user will be on the redux state at:
  // state.user
  export default members;
  