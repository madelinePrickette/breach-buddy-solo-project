import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

// this post is a get actually!
function* fetchFilter(action) {
    console.log('action.payload:', action.payload);
    let response = yield axios.post(`/api/search`, action.payload)
    yield put({type: 'SET_ALL_USERS', payload: response.data})
}

function* allUsersSaga() {
    yield takeEvery ('FETCH_FILTER', fetchFilter);
}

export default allUsersSaga;