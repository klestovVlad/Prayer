import {call, put, takeLatest} from 'redux-saga/effects';

import {signInQuery, signUpQuery} from './axios';
import {UserAction} from './slice';

function* signIn(action: any) {
  const {data} = yield call(() => signInQuery(action.payload));
  if (data.hasOwnProperty('message')) {
    yield put(UserAction.signError(data.message));
  } else {
    yield put(UserAction.signIn(data));
  }
}

function* signUp(action: any) {
  console.log('signUpSaga', action);
  const {data} = yield call(() => signUpQuery(action.payload));
  if (data.hasOwnProperty('message')) {
    yield put(UserAction.signError(data.message));
  }
  console.log('pre-put', data);
  yield put(UserAction.signUp(data));
}

export function* userWatcher() {
  yield takeLatest(UserAction.signInRequest.type, signIn);
  yield takeLatest(UserAction.singUpRequest.type, signUp);
}
