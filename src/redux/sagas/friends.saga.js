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

function* deleteFriend(action) {
    try{
        console.log('in deleteFriend');
        yield axios.delete(`/api/friends/${action.payload}`)
        yield put({type: 'FETCH_FRIENDS'})
    }catch(err){
        console.error('Error in friends.saga.js deleteFriend function', err)
    }
}

function* friendsSaga() {
    yield takeEvery ('FETCH_FRIENDS', fetchFriends)
    yield takeEvery ('DELETE_FRIEND', deleteFriend);
}

export default friendsSaga;