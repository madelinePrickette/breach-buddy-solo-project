import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchAll() {
    const response = 
}


function* fetchAllSaga() {
    yield takeEvery ('FETCH_ALL', fetchAll);
}

export default fetchAllSaga;