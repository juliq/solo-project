import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMembers() {
    try {
      //stores server response.data as 'items'
      const response = yield axios.get('/api/member');
      //stores items list in redux store
      yield put({ type: 'SET_MEMBERS', payload: response.data });
    } catch (error) {
      console.log('Error fetching items', error);
    }
  }

function* memberSaga() {
    yield takeLatest('GET_MEMBERS', getMembers);
}
  
export default memberSaga;