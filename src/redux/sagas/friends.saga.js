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

function* addAsFriend(action) {
    // I dont know what reducer file this function should be in or if it matters.
    // This person isnt a friend yet but once they are, i think we should refresh friends
    // therefore FETCH_FRIENDS would need to be called so I put this here...
    
    try{
        console.log('in addAsFriend')
        yield axios.post(`/api/friends/${action.payload}`)
        yield put({type: 'FETCH_FRIENDS'})
    }catch(err){
        console.error('Error in addAsFriend function in other.user.saga.js', err)
    }
}

function* friendsSaga() {
    yield takeEvery ('FETCH_FRIENDS', fetchFriends);
    yield takeEvery ('DELETE_FRIEND', deleteFriend);
    yield takeEvery ('ADD_AS_FRIEND', addAsFriend);
}

export default friendsSaga;