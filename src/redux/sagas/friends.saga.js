import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

function* fetchFriends() {
    try{
        console.log('in fetchFriends')
        const response = yield axios.get('/api/friends')
        yield put({type: 'SET_FRIENDS', payload: response.data})
    }catch(err){
        console.log('Error in friends.saga.js fetchFriends function', err)
    }
}

function* friendsSaga() {
    yield takeEvery ('FETCH_FRIENDS', fetchFriends)
}

export default friendsSaga;