import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchMessage() {
    try{
        const response = yield axios.get('/api/message');
        yield put({type: 'SET_MESSAGE', payload: response.data})
    } catch (error) {
        console.error('error in message.saga.js fetchMessage', error)
    }
}

function* addMessage(action) {
    console.log('This is the action.payload:', action.payload)
    try{
        yield axios.post('/api/message', action.payload);
        yield put({type: 'FETCH_MESSAGE'});
    }catch{
        console.error('error in message.saga.js addMessage', err);
    }
}

function* messageSaga(action) {
    yield takeEvery('FETCH_MESSAGE', fetchMessage);
    yield takeEvery('ADD_MESSAGE', addMessage);
}

export default messageSaga;