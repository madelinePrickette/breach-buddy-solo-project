import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchAll() {
    const response = yield axios.get('/api/search')
    yield put({type: 'SET_ALL_USERS', payload: response.data})
}

function* fetchRankFilter(action) {
    console.log('action.payload:', action.payload);
    const response = yield axios.get(`/api/search/r/${action.payload}`)
    yield put({type: 'SET_ALL_USERS', payload: response.data})
}

function* fetchGamemodeFilter(action) {
    console.log('action.payload:', action.payload);
    const response = yield axios.get(`/api/search/t/${action.payload}`)
    yield put({type: 'SET_ALL_USERS', payload: response.data})
}

function* allUsersSaga() {
    yield takeEvery ('FETCH_SEARCH', fetchAll);
    yield takeEvery ('FETCH_RANK_FILTER', fetchRankFilter);
    yield takeEvery ('FETCH_GAMEMODE_FILTER', fetchGamemodeFilter);
}

export default allUsersSaga;