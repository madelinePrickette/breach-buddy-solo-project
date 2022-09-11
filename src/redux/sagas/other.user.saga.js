import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchOtherProfile(action) {
    try{
        console.log('in fetchOtherProfile')
        let response = yield axios.get(`/api/otherProfile/${action.payload.id}`)
        yield put({type: 'SET_OTHER_PROFILE', payload: response.data})
    }catch(err){
        console.log('Error in fetchOtherProfile function other.user.saga.js', err)
    }
}

function* otherUserSaga() {
    yield takeEvery ('FETCH_OTHER_PROFILE', fetchOtherProfile);
}

export default otherUserSaga;