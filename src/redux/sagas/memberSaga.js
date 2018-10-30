import { put, takeLatest } from 'redux-saga/effects';
import { MEMBER_ACTIONS } from '../actions/memberActions';
import { getMembersRequest } from '../requests/memberRequests';

function* getMembers() {
    try {
      //stores server response.data as 'items'
      const members = yield getMembersRequest();
      //stores items list in redux store
      yield put({ type: MEMBER_ACTIONS.GET_MEMBERS, payload: members });
    } catch (error) {
      console.log('Error fetching items', error);
    }
  }

function* memberSaga() {
    yield takeLatest(MEMBER_ACTIONS.GET_MEMBERS, getMembers);


function* deleteMember() {
    // yield takeLatest(MEMBER_ACTIONS.DELETE_MEMBER, deleteMember);
}


function* addMember() {
    // yield takeLatest(MEMBER_ACTIONS.ADD_MEMBER, addMember);
}

function* updateMember() {
    // yield takeLatest(MEMBER_ACTIONS.UPDATE_MEMBER, updateMember); 
}
  }
  
  export default memberSaga;