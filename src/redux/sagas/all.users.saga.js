import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchAll() {
    const response = yield axios.get('/api/search')
    yield put({type: 'SET_ALL_USERS', payload: response.data})
}

function* allUsersSaga() {
    yield takeEvery ('FETCH_SEARCH', fetchAll);
}

export default allUsersSaga;