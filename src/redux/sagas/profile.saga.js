import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchProfile() {
    try {
        console.log('in fetchProfile');
        const response = yield axios.get('/api/profile')
        yield put({type: 'SET_PROFILE', payload: response.data})
        console.log(response.data);
    }catch(err){
        console.error('Error in fetchProfile function profile.saga.js', err)
    }
}

function* profileSaga() {
    yield takeEvery ('FETCH_PROFILE', fetchProfile);
}

export default profileSaga;