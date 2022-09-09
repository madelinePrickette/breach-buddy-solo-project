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

function* saveProfile(action) {
    try{
        console.log('in saveProfile')
        yield axios.put('/api/profile', action.payload)
        yield put({type: 'FETCH_PROFILE'})
    }catch(err){
        console.log('Error in saveProfile function profile.saga.js', err)
    }
}

function* profileSaga() {
    yield takeEvery ('FETCH_PROFILE', fetchProfile);
    yield takeEvery ('SAVE_PROFILE', saveProfile);
}

export default profileSaga;