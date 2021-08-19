import {AxiosQuery} from './axios';
import {put, takeEvery} from 'redux-saga/effects';
import {UserAction} from './slice';

function* signIn() {
  console.log('hello!');
}

export function* userWatcher() {
  yield takeEvery(UserAction.singInRequest.type, signIn);
}
